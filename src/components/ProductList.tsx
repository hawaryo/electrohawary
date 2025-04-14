import styles from "./ProductList.module.css";
import {createClient} from "../utils/supabase/client";
import {auth} from "../utils/auth/auth";
import Link from "next/link";

type Props = {CategoryName: string};

export default async function ProductList({CategoryName}: Props) {
  const supabase = createClient();
  const session = await auth();

  //get products from the specified category
  const {data: products} = await supabase
    .from("product")
    .select("id, title, product_image!inner(url, alt), category!inner(name), price")
    .eq("category.name", CategoryName);

  return (
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
            {session?.user.is_vip ? (
              <p className={styles["price"]}>{n.price} جنية</p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
