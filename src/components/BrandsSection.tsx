import styles from "./BrandsSection.module.css";
import DuplicateImages from "./ui/DuplicateImages";
import {brandImages} from "../data/brandImages";
export default function BrandsSection() {
  return (
    <section className={styles["brands-section"]}>
      <h2>العلامات التجارية</h2>
      <div className={styles["brands-list"]}>
        <div className={styles["brands"]}>
          <DuplicateImages images={brandImages} />
        </div>
      </div>
    </section>
  );
}
