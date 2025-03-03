import "./page.css";
import { createClient } from "../../../utils/supabase/server";
export default async function Instruments() {
  const supabase = await createClient();
  const { data: category } = await supabase.from("category").select();

  return (
    <main>
      <div className="home-page-intro">
        <h1>إلكترو الهواري منتجات إلكترونية ذات جودة عالية</h1>
        <p>
          مجموعة واسعة من الإلكترونيات عالية الجودة ومصابيح الليد والألواح
          الشمسية والبطاريات والمكونات الإليكترونية وأجهزه القياس
        </p>
      </div>
      <section className="category-section">
        <h2>تفقد الأقسام</h2>
        <div className="category-grid">
          {category?.map((a) => (
            <a key={a.id} href={`/${a.name}`}>
              <div className="image-container">
                <img src={a.image_url} alt={a.alt} width={172} height={180} />
              </div>
              <div className="category-name">
                <h3>{a.name}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  fill="none"
                >
                  <path
                    d="M6.885 15.09L.537 8.71a1 1 0 0 1 .004-1.414L6.921.948a1 1 0 1 1 1.411 1.418L3.663 7.011l19.365.05-.005 2-19.365-.05 4.645 4.669a1 1 0 0 1-1.418 1.41z"
                    fill="#000"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
