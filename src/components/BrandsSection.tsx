import styles from "./BrandsSection.module.css";
import duplicateImages from "../utils/helpers/duplicateImages";
export default function BrandsSection() {
  const brandImages = [
    {
      src: "https://hawaryonline.com/brands/best-logo.svg",
      alt: "best logo",
      width: 106,
      height: 41,
    },
    {
      src: "https://hawaryonline.com/brands/genaric-logo.svg",
      alt: "genaric logo",
      width: 165,
      height: 43,
    },
    {
      src: "https://hawaryonline.com/brands/gold-logo.svg",
      alt: "gold logo",
      width: 108,
      height: 42,
    },
    {
      src: "https://hawaryonline.com/brands/khxc-logo.svg",
      alt: "khxc logo",
      width: 119,
      height: 44,
    },
    {
      src: "https://hawaryonline.com/brands/must-logo.svg",
      alt: "must logo",
      width: 143,
      height: 43,
    },
    {
      src: "https://hawaryonline.com/brands/tbe-logo.svg",
      alt: "tbe logo",
      width: 104,
      height: 43,
    },
    {
      src: "https://hawaryonline.com/brands/vera-logo.svg",
      alt: "vera logo",
      width: 117,
      height: 43,
    },
  ];
  return (
    <section className={styles["brands-section"]}>
      <h2>العلامات التجارية</h2>
      <div className={styles["brands-list"]}>
        <div className={styles["brands"]}>{duplicateImages(brandImages)}</div>
      </div>
    </section>
  );
}
