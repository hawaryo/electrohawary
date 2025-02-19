import Image from "next/image";
import styles from "./page.module.css";
  import { createClient } from '../../utils/supabase/server';
export default async function Instruments() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("products")
    .select(`*, category (name)`);

  return <pre>{JSON.stringify(products, null, 2)}</pre>;
}