import CategorySection from "../../component/CategorySection";
import {Suspense} from "react";
import "./page.css";
export default function Instruments() {
  return (
    <main>
      <div className="home-page-intro">
        <h1>إلكترو الهواري منتجات إلكترونية ذات جودة عالية</h1>
        <p>
          مجموعة واسعة من الإلكترونيات عالية الجودة ومصابيح الليد والألواح
          الشمسية والبطاريات والمكونات الإليكترونية وأجهزه القياس
        </p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySection />
      </Suspense>
    </main>
  );
}
