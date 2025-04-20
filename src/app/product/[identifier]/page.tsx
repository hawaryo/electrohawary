import styles from "./page.module.css";
import {Suspense} from "react";
import ProductPage from "@/components/ProductPage";

type Props = {
  params: Promise<{
    identifier: string;
  }>;
};
export default async function Product({params}: Props) {
  const param = await params;

  const productId = parseInt(
    decodeURIComponent(param.identifier).split("-")[0]
  );

  return (
    <main className={styles["main"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductPage productId={productId} />
      </Suspense>
    </main>
  );
}
