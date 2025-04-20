import styles from "./ProductPage.module.css";
import {createClient} from "../utils/supabase/client";
import {auth} from "../utils/auth/auth";
import Link from "next/link";
type Props = {
  productId: number;
};
export default async function ProductPage({productId}: Props) {
  const session = await auth();
  const supabase = createClient();
  const {data: productDetails} = await supabase
    .from("product")
    .select(
      "product_image!inner(url, alt), category!inner(name), title, features, price, description"
    )
    .eq("id", productId)
    .single();

  return (
    <section className={styles["product-section"]}>
      <div className={styles["product-card"]}>
        <div className={styles["breadcrumb"]}>
          <Link href={"/"} aria-label="الصفحة الرئيسية">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              fill="none"
            >
              <path
                d="M.516 8.302a1 1 0 0 0-.349.759v11.748a1 1 0 0 0 1 1h5.338a1 1 0 0 0 1-1v-4.87c0-1.621 1.314-2.935 2.935-2.935s2.935 1.314 2.935 2.935v4.87a1 1 0 0 0 1 1h5.338a1 1 0 0 0 1-1V9.061a1 1 0 0 0-.349-.759L11.09.353a1 1 0 0 0-1.302 0L.516 8.302z"
                fill="#000"
              />
            </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="20"
            fill="none"
          >
            <path
              d="M10.608 17.086a1 1 0 0 1 .038 1.396l-.286.309a1 1 0 0 1-1.431.039L.413 10.565a1 1 0 0 1 0-1.435L8.929.863a1 1 0 0 1 1.431.039l.286.309a1 1 0 0 1-.038 1.396L3.893 9.13a1 1 0 0 0 0 1.435l6.716 6.522z"
              fill="#000"
            />
          </svg>
          <Link
            href={`/category/${productDetails?.category.name}`}
            className={styles["category-link-name"]}
          >
            {productDetails?.category.name}
          </Link>
        </div>
        <div className={styles["img-details-container"]}>
          <img
            src={productDetails?.product_image.url}
            alt={productDetails?.product_image.alt}
            width={700}
            height={700}
            className={styles["product-img"]}
          />

          <div className={styles["product-details"]}>
            <h1 className={styles["product-title"]}>{productDetails?.title}</h1>
            {session?.user.is_vip ? (
              <p className={styles["price"]}>{productDetails?.price} جنية</p>
            ) : null}
            <h2>المميزات</h2>
            <ul className={styles["product-features"]}>
              {(productDetails?.features as string[]).map((f: string) => (
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
