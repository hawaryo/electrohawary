import styles from "./page.module.css";
import {Suspense} from "react";
import ProductPage from "@/components/Product/ProductPage/ProductPage";
import ProductPageVariant from "@/components/Product/ProductPage/ProductPageVariant";

type props = {
  params: Promise<{
    identifier: string;
  }>;
  searchParams: Promise<{
    [key: string]: string;
  }>;
};
export default async function Product({params, searchParams}: props) {
  const param = await params;
  const search = await searchParams;
  const hasSearchParams = Object.keys(search).length > 0;

  return (
    <main className={styles["main"]}>
      {hasSearchParams ? (
        <Suspense fallback={<div>Loading...</div>}>
          <ProductPageVariant params={param} searchParams={search} />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <ProductPage params={param} />
        </Suspense>
      )}
    </main>
  );
}
