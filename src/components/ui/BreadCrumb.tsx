import styles from "./BreadCrumb.module.css";
import Link from "next/link";
import React from "react";

type props = {
  linksList: string[];
};
const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" fill="none">
    <path
      d="M10.608 17.086a1 1 0 0 1 .038 1.396l-.286.309a1 1 0 0 1-1.431.039L.413 10.565a1 1 0 0 1 0-1.435L8.929.863a1 1 0 0 1 1.431.039l.286.309a1 1 0 0 1-.038 1.396L3.893 9.13a1 1 0 0 0 0 1.435l6.716 6.522z"
      fill="#000"
    />
  </svg>
);

export default function BreadCrumb({linksList}: props) {
  return (
    <div className={styles["breadcrumb"]}>
      <Link href={"/"} aria-label="الصفحة الرئيسية">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" fill="none">
          <path
            d="M.516 8.302a1 1 0 0 0-.349.759v11.748a1 1 0 0 0 1 1h5.338a1 1 0 0 0 1-1v-4.87c0-1.621 1.314-2.935 2.935-2.935s2.935 1.314 2.935 2.935v4.87a1 1 0 0 0 1 1h5.338a1 1 0 0 0 1-1V9.061a1 1 0 0 0-.349-.759L11.09.353a1 1 0 0 0-1.302 0L.516 8.302z"
            fill="#000"
          />
        </svg>
      </Link>
      {linksList.map((i, index) => (
        <React.Fragment key={index}>
          <Link href={"/category/" + linksList.slice(0, index + 1).join("/")} className={styles["link-name"]}>
            {i}
          </Link>
          {index < linksList.length - 1 && arrow}
        </React.Fragment>
      ))}
    </div>
  );
}
