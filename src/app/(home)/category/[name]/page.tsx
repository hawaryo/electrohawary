import "./page.css";
import {createClient} from "../../../../../utils/supabase/client";


type props = {
  params: {
    name: string;
  };
};
export default async function CategoryProducts({params}: props) {
  const param = await params;
  const supabase = await createClient();
  const {data: product} = await supabase
    .from("product")
    .select("*, category(name)")
    .eq("category.name", `${param.name}`);
  
  return (
    <div>
      <div lang="ar">{decodeURIComponent(param.name)}</div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
