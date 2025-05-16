import styles from "./ProductPage.module.css";
import secondryStyles from "./ProductPageVariant.module.css";
import {createClient} from "../../../utils/supabase/client";
import {auth} from "../../../utils/auth/auth";
import BreadCrumb from "../../ui/BreadCrumb";
import Link from "next/link";

type props = {
  params: {
    identifier: string;
  };
  searchParams: {
    [key: string]: string;
  };
};
export default async function ProductPage({params, searchParams}: props) {
  const productId = parseInt(decodeURIComponent(params.identifier).split("-")[0]);
  const producturl = decodeURIComponent(params.identifier);

  const [[firstSearchParamKey, firstSearchParamValue]] = Object.entries(searchParams);

  const session = await auth();
  const supabase = createClient();

  //get product variant data that matches the search params
  const {data: variant} = await supabase
    .rpc("get_variant_by_attributes", {
      in_product_id: productId,
      in_attribute_name: firstSearchParamKey,
      in_attribute_value: firstSearchParamValue,
    })
    .single();

  // get all variants attributes names and values from the product ID to display them in the UI as buttons;
  const {data: variantsList} = await supabase.rpc("get_product_attributes", {
    in_product_id: productId,
  });

  const [[firstAttributeName, firstAttributeVariants]] = Object.entries(variantsList!);

  return (
    <section className={styles["product-section"]}>
      <div className={styles["product-card"]}>
        <BreadCrumb linksList={[`${variant?.category_name}`]} />
        <div className={styles["img-details-container"]}>
          <img
            src={variant?.image_url}
            alt={variant?.image_alt}
            width={700}
            height={700}
            className={styles["product-img"]}
          />
          <div className={styles["product-details"]}>
            <h1 className={styles["product-title"]}>
              {`${variant?.title} ${firstSearchParamValue} ${firstSearchParamKey}`}
            </h1>
            {session?.user.is_vip ? <h2 className={styles["price"]}>{variant?.price} جنية</h2> : null}
            {/* variant list */}
            <h2 className={secondryStyles["attribute-name"]}>{firstAttributeName}</h2>
            <div className={secondryStyles["variants-list"]}>
              {firstAttributeVariants.map(v => (
                <Link
                  scroll={false}
                  shallow={true}
                  key={v}
                  href={`${producturl}?${firstAttributeName}=${v}`}
                  className={`${secondryStyles["variant-link"]} ${
                    v === firstSearchParamValue ? secondryStyles["active"] : ""
                  }`}
                >
                  {v}
                </Link>
              ))}
            </div>
            {/* features list */}
            <h2 className={styles["features-title"]}>المميزات</h2>
            <ul className={styles["features-list"]}>
              {variant?.features.map((f: string) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* product description */}
      <div className={styles["product-description"]}>
        <h2 className={styles["description-title"]}>وصف المنتج</h2>
        <p>{variant?.description}</p>
      </div>
    </section>
  );
}
