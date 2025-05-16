import ProductCard from "../ProductCard/ProductCard";
import ProductCardWithVariants from "../ProductCard/ProductCardVariant";
import styles from "./ProductList.module.css";
import {createClient} from "../../../utils/supabase/client";
import {auth} from "../../../utils/auth/auth";
import type {
  ProductCard as ProductCardBasic,
  ProductCardWithVariants as ProductCardWithVariantsType,
} from "../../../utils/types/ProductCard";

type Props = {CategoryName: string};

export default async function ProductList({CategoryName}: Props) {
  const supabase = createClient();
  const session = await auth();

  //get products from the specified category
  const {data: products} = await supabase.rpc("get_products_with_variant_reference", {
    in_category_name: CategoryName,
  });

  return (
    <section>
      <div className={styles["products-grid"]}>
        {products?.map(p =>
          /* if the product doesn't have variants then display ProductCard, otherwise display ProductCardWithVariants*/
          p.attributes === null ? (
            <ProductCard key={p.id} product={p as ProductCardBasic} session={session} />
          ) : (
            <ProductCardWithVariants key={p.id} product={p as ProductCardWithVariantsType} session={session} />
          )
        )}
      </div>
    </section>
  );
}
