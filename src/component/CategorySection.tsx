import styles from "./CategorySection.module.css";
import {createClient} from "../utils/supabase/client";
import Link from "next/link";

export default async function Instruments() {
  const supabase = await createClient();
  const {data: category} = await supabase.from("category").select();

  return (
    <section className={styles["category-section"]}>
      <h2>تفقد الأقسام</h2>
      <div className={styles["category-grid"]}>
        {category?.map(a => (
          <Link key={a.id} href={`/category/${a.name}`}>
            <div className={styles["image-container"]}>
              <img src={a.image_url} alt={a.alt} width={500} height={500} />
            </div>
            <div className={styles["category-name"]}>
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
          </Link>
        ))}
      </div>
    </section>
  );
}
