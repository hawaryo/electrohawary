import styles from "./BrandsSection.module.css";
import DuplicateImages from "./ui/DuplicateImages";
export default function BrandsSection() {
  const brandImages = [
    {
      src: "https://hawaryonline.com/brands/best-logo.svg",
      alt: "best logo",
      width: 106,
      height: 41,
      id: 1,
    },
    {
      src: "https://hawaryonline.com/brands/genaric-logo.svg",
      alt: "genaric logo",
      width: 165,
      height: 43,
      id: 2,
    },
    {
      src: "https://hawaryonline.com/brands/gold-logo.svg",
      alt: "gold logo",
      width: 108,
      height: 42,
      id: 3,
    },
    {
      src: "https://hawaryonline.com/brands/khxc-logo.svg",
      alt: "khxc logo",
      width: 119,
      height: 44,
      id: 4,
    },
    {
      src: "https://hawaryonline.com/brands/must-logo.svg",
      alt: "must logo",
      width: 143,
      height: 43,
      id: 5,
    },
    {
      src: "https://hawaryonline.com/brands/tbe-logo.svg",
      alt: "tbe logo",
      width: 104,
      height: 43,
      id: 6,
    },
    {
      src: "https://hawaryonline.com/brands/vera-logo.svg",
      alt: "vera logo",
      width: 117,
      height: 43,
      id: 7,
    },
  ];
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
