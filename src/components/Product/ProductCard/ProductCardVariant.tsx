"use client";

import {createClient} from "../../../utils/supabase/client";
import styles from "./ProductCard.module.css";
import secondaryStyles from "./ProductCardVariant.module.css";
import type {ProductCardWithVariants, ProductVariantDetails} from "../../../utils/types/ProductCard";
import React, {useState, useEffect} from "react";
import Link from "next/link";

type Props = {
  product: ProductCardWithVariants;
  session: {
    user: {
      is_vip?: boolean;
    };
  } | null;
};

export default function ProductCardWithVariants({product, session}: Props): React.ReactElement {
  //get the first attribute details
  const firstAttributeName = Object.keys(product.attributes)[0];
  const firstAttributeValues = product.attributes[firstAttributeName];

  //get the first variant id and value
  const firstVariantId = firstAttributeValues[0].variant_id;
  const firstVariantValue = firstAttributeValues[0].value;

  const [variantReference, setVariantReference] = useState({
    variantId: firstVariantId,
    variantValue: firstVariantValue,
  });

  const [VariantData, setVariantData] = useState<ProductVariantDetails>(null);

  //get variant data (image and price) using variant id
  useEffect(() => {
    const getData = async () => {
      const supabase = createClient();
      const {data: variant} = await supabase
        .from("variant")
        .select("product_image!inner(url, alt), price")
        .eq("id", variantReference.variantId)
        .single();

      setVariantData(variant);
    };

    getData();
  }, [variantReference.variantId]);

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    //get the selected element
    const selectedOption = e.target.selectedOptions[0];

    setVariantReference({
      ...variantReference,
      variantId: Number(e.target.value),
      variantValue: selectedOption.dataset.variantValue!,
    });
  }

  return (
    <div className={styles["product-card"]}>
      {/* link to the product page */}
      <Link
        href={`/product/${product.id}-${product.product_title.replaceAll(" ", "-")}?${firstAttributeName}=${
          variantReference.variantValue
        }`}
      >
        <img src={VariantData?.product_image.url} alt={VariantData?.product_image.alt} width={300} height={300} />
        <h2>
          {product.product_title}
          <span className={secondaryStyles["variant-value"]}>{variantReference.variantValue}</span> {firstAttributeName}
        </h2>
        {session?.user.is_vip ? <p className={styles["price"]}>{VariantData?.price} جنية</p> : null}
      </Link>
      {/* selectable variant dropdown */}
      <div className={secondaryStyles["variants-container"]}>
        <h3 className={secondaryStyles["variants-title"]}>{firstAttributeName}</h3>
        <select
          value={variantReference.variantId}
          onChange={handleSelect}
          className={secondaryStyles["variants-select"]}
        >
          {firstAttributeValues.map(v => (
            <option
              key={v.variant_id}
              value={v.variant_id}
              data-variant-value={v.value}
              className={secondaryStyles["variant-option"]}
            >
              {v.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
