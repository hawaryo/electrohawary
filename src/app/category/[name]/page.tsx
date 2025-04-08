import styles from "./page.module.css";
import {createClient} from "../../../utils/supabase/client";
import Link from "next/link";
import {Suspense} from "react";
//types
type props = {
  params: Promise<{
    name: string;
  }>;
};

export default async function CategoryProducts({params}: props) {
  const param = await params;
  const supabase = createClient();
  const CategoryName = decodeURIComponent(param.name);

  //get products from the specified category
  const {data: products} = await supabase
    .from("product")
    .select("id, title, product_image!inner(url, alt), category!inner(name), price")
    .eq("category.name", CategoryName);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1
          className={styles["category-heading"]}
        >{`منتجات قسم ال${CategoryName}`}</h1>
        <section>
          <div className={styles["products-grid"]}>
            {products?.map(n => (
              <Link href={`/product/${n.title}`} key={n.id}>
                <img
                  src={n.product_image.url}
                  alt={n.product_image.alt}
                  width={300}
                  height={300}
                />
                <h2>{n.title}</h2>
                <p className={styles["price"]}>{n.price} جنية</p>
              </Link>
            ))}
          </div>
        </section>
      </Suspense>
    </>
  );
}
