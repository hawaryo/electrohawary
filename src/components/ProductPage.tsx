import styles from "./ProductPage.module.css";
import {createClient} from "../utils/supabase/client";
import {auth} from "../utils/auth/auth";
import BreadCrumb from "./ui/BreadCrumb";

type Props = {
  productId: number;
};
export default async function ProductPage({productId}: Props) {
  const session = await auth();
  const supabase = createClient();
  const {data: productDetails} = await supabase
    .from("product")
    .select("product_image(url, alt), category(name), title, features, price, description")
    .eq("id", productId)
    .single();

  return (
    <section className={styles["product-section"]}>
      <div className={styles["product-card"]}>
        <BreadCrumb linksList={[`${productDetails?.category?.name}`]} />
        <div className={styles["img-details-container"]}>
          <img
            src={productDetails?.product_image?.url}
            alt={productDetails?.product_image?.alt}
            width={700}
            height={700}
            className={styles["product-img"]}
          />

          <div className={styles["product-details"]}>
            <h1 className={styles["product-title"]}>{productDetails?.title}</h1>
            {session?.user.is_vip ? <p className={styles["price"]}>{productDetails?.price} جنية</p> : null}
            <h2>المميزات</h2>
            <ul className={styles["product-features"]}>
              {productDetails?.features.map((f: string) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["product-description"]}>
        <h2>وصف المنتج</h2>
        <p>{productDetails?.description}</p>
      </div>
    </section>
  );
}
