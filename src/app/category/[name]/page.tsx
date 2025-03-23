"use cache";
import "./page.css";
import {createClient} from "../../../utils/supabase/client";
import Link from "next/link";
import {Suspense} from "react";
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
  category: {
    name: string;
  };
};
export default async function CategoryProducts({params}: props) {
  const param = await params;
  const supabase = await createClient();
  const CategoryName = decodeURIComponent(param.name);

  //get products from the specified category
  const {data: products} = await supabase
    .from("product")
    .select("id, title,product_image(url, alt), category!inner(name)")
    .eq("category.name", CategoryName)
    .returns<product[]>();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
}
