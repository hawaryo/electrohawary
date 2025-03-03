import "./page.css";

type props = {
  params: {
    categoryname: string;
  };
};
export default function CategoryProducts({ params }: props) {
  console.log(params.categoryname);
  return <div lang="ar">{params.categoryname}</div>;
}