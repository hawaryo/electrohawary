import styles from "./page.module.css";
import {Suspense} from "react";
import ProductPage from "@/components/ProductPage";

type props = {
  params: {
    identifier: string;
  };
  searchParams: {
    [key: string]: string ;
  };
}
export default async function Product({params, searchParams}: props) {
  const param = await params;
  return (
    <main className={styles["main"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductPage params={param}/>
      </Suspense>
    </main>
  );
}
