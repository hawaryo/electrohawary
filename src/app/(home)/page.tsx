import CategoryList from "../../components/CategoryList";
import BrandsSection from "../../components/BrandsSection";
import styles from "./page.module.css";
import {Suspense} from "react";
export default function Home() {
  return (
    <main>
      <div className={styles["intro"]}>
        <h1>إلكترو الهواري منتجات إلكترونية ذات جودة عالية</h1>
        <p>
          مجموعة واسعة من الإلكترونيات عالية الجودة ومصابيح الليد والألواح
          الشمسية والبطاريات والمكونات الإليكترونية وأجهزه القياس
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryList />
      </Suspense>
      <BrandsSection />
    </main>
  );
}
