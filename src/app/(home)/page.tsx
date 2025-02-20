import styles from "./page.module.css";
  import { createClient } from '../../../utils/supabase/server';
export default async function Instruments() {
  const supabase = await createClient();
  const { data: category } = await supabase
    .from("category")
    .select();

  return <div>{category?.map((a)=><div key={a.id}><img src={a.image.link} alt={a.image.alt} /></div>)}</div>;
}