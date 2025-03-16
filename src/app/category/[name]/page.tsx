"use cache";
import "./page.css";
import {createClient} from "../../../utils/supabase/client";
import Link from "next/link";
//types
type props = {
  params: Promise<{
    name: string;
  }>;
};

type product = {
  id: number;
  title: string;
  product_image: {
    url: string;
    alt: string;
  };
};
export default async function CategoryProducts({params}: props) {
  const param = await params;
  const supabase = await createClient();
  const CategoryName = decodeURIComponent(param.name);
  //get category ID
  const {data: categoryId} = await supabase
    .from("category")
    .select("id")
    .eq("name", CategoryName)
    .single();
  //get products from the specified category ID
  const {data: products} = await supabase
    .from("product")
    .select("id, title, product_image(url, alt)")
    .eq("category_id", categoryId?.id)
    .returns<product[]>();

  return (
    <>
      <h1 className="category-section-heading">{`منتجات قسم ال${CategoryName}`}</h1>
      <section>
        <div className="products_grid">
          {products?.map(n => (
            <Link href={`/product/${n.title}`} key={n.id}>
              <img
                src={n.product_image.url}
                alt={n.product_image.alt}
                width={300}
                height={300}
              />
              <h2>{n.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
