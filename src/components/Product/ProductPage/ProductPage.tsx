import styles from "./ProductPage.module.css";
import {createClient} from "../../../utils/supabase/client";
import {auth} from "../../../utils/auth/auth";
import BreadCrumb from "../../ui/BreadCrumb";

type props = {
  params: {
    identifier: string;
  };
};
export default async function ProductPage({params}: props) {
  const productId = parseInt(decodeURIComponent(params.identifier).split("-")[0]);

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
            <h2 className={styles["features-title"]}>المميزات</h2>
            <ul className={styles["features-list"]}>
              {productDetails?.features.map((f: string) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["product-description"]}>
        <h2 className={styles["description-title"]}>وصف المنتج</h2>
        <p>{productDetails?.description}</p>
      </div>
    </section>
  );
}
