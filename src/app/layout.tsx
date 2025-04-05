import type {Metadata} from "next";
import {Rubik} from "next/font/google";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/utils.css";
import NavBar from "../component/NavBar";

export const metadata: Metadata = {
  icons: {
    icon: [{url: "/favicon.svg", type: "image/svg+xml"}],
  },
  title: "الكترو الهواري",
  description:
    "تسوق الان منتجات الكترونية، إضاءة ليد، خلايا طاقة شميسة و بطاريات",
};

const rubikFont = Rubik({
  subsets: ["arabic"],
  variable: "--rubik",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={rubikFont.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
