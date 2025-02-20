import "./NavBar.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="navbar">
      <img src="/images/electrohawary-logo.svg" alt="" />
      <search>
        <form action="">
          <input type="text" />
        </form>
      </search>
      <Link href="#">التواصل</Link>
      <Link href="#">الفروع</Link>
      <Link href="#">عنا</Link>
    </nav>
  );
}
