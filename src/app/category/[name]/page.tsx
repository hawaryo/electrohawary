import styles from "./page.module.css";
import {Suspense} from "react";
import ProductList from "@/components/Product/ProductList/ProductList";
import ShareButton from "@/components/ShareButton";
//types
type props = {
  params: Promise<{
    name: string;
  }>;
};

export default async function CategoryProducts({params}: props) {
  const param = await params;
  const CategoryName = decodeURIComponent(param.name);

  return (
    <>
      <h1 className={styles["category-heading"]}>
        <span>{`منتجات قسم ال${CategoryName}`}</span>
        <ShareButton url={CategoryName} />
      </h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductList CategoryName={CategoryName} />
      </Suspense>
    </>
  );
}
