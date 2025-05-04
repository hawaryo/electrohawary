import ProductCardSimple from "./Product/ProductCard/ProductCard";
import ProductCardWithVariants from "./Product/ProductCard/ProductCardVariant";
import styles from "./ProductList.module.css";
import {createClient} from "../utils/supabase/client";
import {auth} from "../utils/auth/auth";
import type {
  ProductCardSimple as ProductCardSimpleType,
  ProductCardWithVariants as ProductCardWithVariantsType,
} from "../utils/types/ProductCard";

type Props = {CategoryName: string};

export default async function ProductList({CategoryName}: Props) {
  const supabase = createClient();
  const session = await auth();

  //get products from the specified category
  const {data: products} = await supabase.rpc("get_products_with_variant", {
    in_category_name: CategoryName,
  });

  return (
    <section>
      <div className={styles["products-grid"]}>
        {products?.map(p =>
          /* if the product doesn't have variants */
          p.attributes === null ? (
            <ProductCardSimple key={p.id} product={p as ProductCardSimpleType} session={session} />
          ) : (
            <ProductCardWithVariants key={p.id} product={p as ProductCardWithVariantsType} session={session} />
          )
        )}
      </div>
    </section>
  );
}
