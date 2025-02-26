export const runtime = "edge";
/* import styles from "./page.module.css"; */
import { createClient } from "../../../utils/supabase/server";
export default async function Instruments() {
  const supabase = await createClient();
  const { data: category } = await supabase.from("category").select();

  return (
    <main>
      <section className="category-section">
        <h1>إلكترو الهواري منتجات إلكترونية ذات جودة عالية</h1>
        <p>
          مجموعة واسعة من الإلكترونيات عالية الجودة ومصابيح LED والألواح الشمسية
          والبطاريات والمكونات الإليكترونية وأجهزه القياس
        </p>
        <h2>تفقد الأقسام</h2>
        <div>
          {category?.map((a) => (
            <div key={a.id}>
              <img src={a.image_url} alt={a.alt} width={500} height={500} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
