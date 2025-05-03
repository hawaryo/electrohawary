import styles from "./ProductCard.module.css";
import Link from "next/link";
import type {ProductCardSimple} from "../../utils/types/ProductCard";

type Props = {
  product: ProductCardSimple;
  session: {
    user: {
      is_vip?: boolean;
    };
  } | null;
};

export default function ProductCardSimple({product, session}: Props) {
  return (
    <Link
      href={`/product/${product.id}-${product.product_title.replaceAll(" ", "-")}`}
      className={styles["product-card"]}
    >
      <img src={product.image_url} alt={product.image_alt} width={300} height={300} />
      <h2>{product.product_title}</h2>
      {session?.user.is_vip ? <p className={styles["price"]}>{product.price} جنية</p> : null}
    </Link>
  );
}
