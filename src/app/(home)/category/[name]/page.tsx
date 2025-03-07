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
  //get category ID
  const {data: categoryId} = await supabase
    .from("category")
    .select(`id`)
    .eq("name", decodeURIComponent(param.name))
    .single();
  //get products from the specified category ID
  const {data: product} = await supabase
    .from("product")
    .select(`title, product_image(url, alt)`)
    .eq("category_id", categoryId?.id); //param.name

  return (
    <div>
      <div>{`منتجات قسم ال${decodeURIComponent(param.name)}`}</div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
     
    </div>
  );
}
