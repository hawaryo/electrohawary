import "./page.css";

type props = {
  params: {
    categoryname: string;
  };
};
export default async function CategoryProducts({params}: props) {
  const param = await params;

  console.log(param.categoryname);
  return <div lang="ar">{param.categoryname}</div>;
}
