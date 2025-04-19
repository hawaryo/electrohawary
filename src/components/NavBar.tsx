"use client";
import {useState} from "react";
import {useSession} from "next-auth/react";
import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
 const [clicked, setClicked] = useState(false);
 const {status} = useSession();

  function handleClicked() {
    setClicked(!clicked);
  }

  return (
    <nav className={styles["navbar"]}>
      <button
        className={styles["menu-toggle-button"]}
        aria-label="اظهار القائمة"
        aria-controls="navbar-links"
        aria-expanded={clicked ? "true" : "false"}
        onClick={handleClicked}
      >
        {clicked ? (
          <svg
            width="35"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2642 13.7344L27.129 3.87019C27.2123 3.787 27.2783 3.68822 27.3234 3.57949C27.3685 3.47076 27.3917 3.35422 27.3917 3.23653C27.3917 3.11883 27.3685 3.00229 27.3234 2.89356C27.2783 2.78483 27.2123 2.68605 27.129 2.60286L25.2437 0.716863C25.0756 0.548911 24.8477 0.454575 24.6101 0.45459C24.3725 0.45456 24.1446 0.548897 23.9765 0.716863L14.1117 10.5818L4.24687 0.716863C4.07876 0.548897 3.85084 0.45456 3.6132 0.45459C3.37559 0.454575 3.14769 0.548911 2.9796 0.716863L1.09429 2.60286C1.01103 2.68605 0.944985 2.78483 0.899922 2.89356C0.854859 3.00229 0.831665 3.11883 0.831665 3.23653C0.831665 3.35422 0.854859 3.47076 0.899922 3.57949C0.944985 3.68822 1.01103 3.787 1.09429 3.87019L10.9591 13.7344L1.09527 23.5974C0.745151 23.9477 0.745151 24.5146 1.09527 24.8647L2.98069 26.7507C3.14849 26.9185 3.37641 27.013 3.6143 27.013C3.85219 27.013 4.08005 26.9185 4.24802 26.7507L14.1116 16.887L23.9753 26.7507C24.1434 26.9187 24.3713 27.0131 24.6089 27.013C24.8469 27.013 25.0747 26.9185 25.2425 26.7507L27.1279 24.8647C27.4781 24.5146 27.4781 23.9477 27.1279 23.5974L17.2642 13.7344Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="35"
            height="30"
            viewBox="0 0 35 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.541634 2.78133C0.541634 1.63074 1.47437 0.697998 2.62497 0.697998H32.625C33.7756 0.697998 34.7083 1.63074 34.7083 2.78133C34.7083 3.93192 33.7756 4.86466 32.625 4.86466H2.62497C1.47437 4.86466 0.541634 3.93192 0.541634 2.78133ZM0.541634 12.7813C0.541634 11.6307 1.47437 10.698 2.62497 10.698H32.625C33.7756 10.698 34.7083 11.6307 34.7083 12.7813C34.7083 13.9319 33.7756 14.8647 32.625 14.8647H2.62497C1.47437 14.8647 0.541634 13.9319 0.541634 12.7813ZM0.541634 22.7813C0.541634 21.6307 1.47437 20.698 2.62497 20.698H32.625C33.7756 20.698 34.7083 21.6307 34.7083 22.7813C34.7083 23.9319 33.7756 24.8647 32.625 24.8647H2.62497C1.47437 24.8647 0.541634 23.9319 0.541634 22.7813Z"
              fill="#292929"
            />
          </svg>
        )}
      </button>
      <Link href="/" aria-label="الصفحة الرئيسية" className={styles["logo"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="39"
          fill="none"
        >
          <path
            fillRule="evenodd"
            d="M2.962.922a2 2 0 0 0-2 2v32.606a2 2 0 0 0 2 2h32.492a2 2 0 0 0 2-2V2.922a2 2 0 0 0-2-2H2.962zm4.964 5.777v25.526h5.397V21.68H24.28v10.545h5.385V6.699H24.28v10.532H13.324V6.699H7.927z"
            fill="#372f28"
          />
        </svg>
        <svg
          className={styles["logo-text"]}
          xmlns="http://www.w3.org/2000/svg"
          width="186"
          height="37"
          fill="#000"
        >
          <path d="M162.717 3.782l-3.908 3.481a16.32 16.32 0 0 1 2.236.188c.739.114 1.445.296 2.116.546a7.75 7.75 0 0 1 1.86.956 5.86 5.86 0 0 1 1.484 1.468c.421.58.751 1.268.99 2.065.239.785.359 1.689.359 2.713v4.676h3.839c.375 0 .688-.125.939-.375.261-.25.392-.557.392-.922V1.188h4.351v17.389a5.55 5.55 0 0 1-.443 2.201 5.6 5.6 0 0 1-1.229 1.792c-.512.512-1.115.916-1.809 1.211a5.47 5.47 0 0 1-2.201.444h-38.002c-.137.466-.347.973-.632 1.519s-.688 1.104-1.211 1.672c-.512.58-1.166 1.149-1.963 1.706s-1.769 1.075-2.918 1.553l-1.672-4.01a10.96 10.96 0 0 0 1.468-.751 7.48 7.48 0 0 0 1.109-.768c.307-.25.563-.501.768-.751a5.27 5.27 0 0 0 .512-.7c.307-.523.472-1.035.495-1.536V7.263h4.368v12.611h7.03V7.263h4.352v12.611h18.088v-4.676c0-.705-.148-1.286-.444-1.741a3.14 3.14 0 0 0-1.143-1.109c-.466-.273-1.001-.461-1.604-.563-.592-.114-1.194-.171-1.809-.171-.603 0-1.234.051-1.894.153l-1.86.376a14.3 14.3 0 0 0-1.604.461l-1.126.427-1.928-3.515 9.504-8.788 3.14 3.055zm-21.535-1.229c-.114.262-.171.546-.171.853s.057.597.171.87c.114.262.267.495.461.7a2.42 2.42 0 0 0 .699.461 2.24 2.24 0 0 0 .871.171c.307 0 .591-.057.853-.171a2.15 2.15 0 0 0 .7-.461 2.25 2.25 0 0 0 .477-.7c.114-.273.171-.563.171-.87a2.11 2.11 0 0 0-.171-.853 2.02 2.02 0 0 0-.477-.7c-.194-.205-.427-.364-.7-.478-.262-.125-.546-.188-.853-.188a2.07 2.07 0 0 0-.871.188 2.26 2.26 0 0 0-.699.478c-.194.193-.347.427-.461.7zm-5.256 0c-.114.262-.17.546-.17.853s.056.597.17.87a2.25 2.25 0 0 0 .478.7c.193.193.421.347.683.461a2.24 2.24 0 0 0 .87.171c.307 0 .591-.057.853-.171a2.15 2.15 0 0 0 .7-.461 2.25 2.25 0 0 0 .477-.7 2.05 2.05 0 0 0 .188-.87 1.94 1.94 0 0 0-.188-.853 2.02 2.02 0 0 0-.477-.7c-.194-.205-.427-.364-.7-.478-.262-.125-.546-.188-.853-.188s-.597.063-.87.188a2.05 2.05 0 0 0-.683.478c-.205.193-.364.427-.478.7zm49.384 21.672V1.188h-4.351v23.037h4.351z" />
          <path
            fillRule="evenodd"
            d="M109.852 25.948h5.478c.648 0 1.228-.148 1.74-.444s.904-.722 1.178-1.28h-5.034c-.774 0-1.502-.148-2.185-.444a5.87 5.87 0 0 1-1.791-1.194 5.73 5.73 0 0 1-1.212-1.792 5.43 5.43 0 0 1-.444-2.184v-3.447a7.89 7.89 0 0 1 .598-3.072c.409-.956.961-1.792 1.655-2.508.705-.717 1.524-1.28 2.457-1.689a7.29 7.29 0 0 1 3.003-.631c1.07 0 2.071.216 3.004.648.944.421 1.763.99 2.457 1.706.705.717 1.257 1.547 1.655 2.491.41.944.615 1.934.615 2.969v7.508a7.34 7.34 0 0 1-.615 2.986 7.62 7.62 0 0 1-1.638 2.457 7.49 7.49 0 0 1-2.457 1.655c-.933.409-1.928.614-2.986.614h-5.478v-4.351zm8.822-6.075v-4.795c0-.455-.091-.893-.273-1.314-.171-.421-.409-.785-.717-1.092-.307-.319-.665-.569-1.075-.751-.409-.193-.847-.29-1.314-.29a3.2 3.2 0 0 0-1.314.273c-.398.182-.75.432-1.058.751-.295.319-.534.694-.716 1.126-.171.432-.256.893-.256 1.382v3.447a1.26 1.26 0 0 0 .358.904c.25.239.552.358.905.358h5.46z"
          />
          <path d="M98.419 24.225V1.188h-4.351v23.037h4.351z" />
          <path
            fillRule="evenodd"
            d="M90.484 1.188v17.389c0 .774-.148 1.507-.444 2.201a5.59 5.59 0 0 1-1.229 1.792c-.512.512-1.115.916-1.809 1.211-.683.296-1.416.444-2.201.444H55.417a7.37 7.37 0 0 1-1.007 2.389c-.466.739-1.035 1.382-1.706 1.928-.66.546-1.405.973-2.235 1.28a7.09 7.09 0 0 1-2.594.478h-5.461v-4.351h5.461c.648 0 1.229-.148 1.741-.444a2.92 2.92 0 0 0 1.177-1.28h-5.034c-.774 0-1.502-.148-2.184-.444a5.88 5.88 0 0 1-1.792-1.194 5.88 5.88 0 0 1-1.195-1.792c-.296-.683-.444-1.411-.444-2.184v-3.447c0-1.092.199-2.116.597-3.072.409-.956.961-1.792 1.655-2.508a7.83 7.83 0 0 1 2.457-1.689c.933-.421 1.928-.631 2.986-.631 1.069 0 2.07.216 3.003.648.944.421 1.763.99 2.457 1.706.705.717 1.257 1.547 1.655 2.491.41.944.614 1.934.614 2.969v4.795h4.88v-2.628c0-.683.102-1.325.307-1.928.205-.614.489-1.166.853-1.655s.791-.91 1.28-1.263a5.23 5.23 0 0 1 1.638-.802 7.05 7.05 0 0 1 1.468-1.792c.614-.535 1.291-.99 2.031-1.365a11 11 0 0 1 2.355-.87c.842-.205 1.684-.307 2.526-.307a10.04 10.04 0 0 1 2.986.444c.967.296 1.82.762 2.56 1.399s1.331 1.462 1.775 2.474c.444 1.001.665 2.213.665 3.635v4.659h3.908c.375 0 .688-.125.939-.375.262-.25.392-.557.392-.922V1.188h4.351zM71.764 19.874h4.778v-4.659c0-.637-.102-1.183-.307-1.638s-.478-.825-.819-1.109c-.33-.296-.717-.512-1.16-.648a4.45 4.45 0 0 0-1.348-.205c-.614 0-1.217.08-1.809.239-.58.159-1.109.387-1.587.682.705.535 1.257 1.2 1.655 1.997.41.796.609 1.678.597 2.645v2.696zm-6.945 0h2.577v-2.696c0-.205-.034-.392-.102-.563-.057-.182-.148-.336-.273-.461-.114-.137-.25-.239-.41-.307a1.13 1.13 0 0 0-.512-.119c-.364 0-.671.148-.921.444-.239.284-.358.643-.358 1.075v2.628zm-13.6-4.795v4.795h-5.461a1.26 1.26 0 0 1-.904-.358c-.239-.25-.358-.552-.358-.904v-3.447a3.73 3.73 0 0 1 .256-1.382 3.81 3.81 0 0 1 .717-1.126 3.45 3.45 0 0 1 1.058-.751c.41-.182.848-.273 1.314-.273a3.04 3.04 0 0 1 1.314.29 3.34 3.34 0 0 1 1.092.751c.307.307.546.671.717 1.092s.256.859.256 1.314z"
          />
          <path d="M36.526 21.887V7.263h-4.369v14.761c-.023.523-.188 1.058-.495 1.604a6.1 6.1 0 0 1-.512.717c-.205.262-.466.523-.785.785-.307.273-.677.535-1.109.785-.421.262-.91.512-1.468.751l1.689 4.027c1.206-.512 2.218-1.081 3.038-1.706s1.49-1.263 2.014-1.911c.523-.637.922-1.263 1.194-1.877s.467-1.16.58-1.638c.125-.478.193-.87.205-1.177l.017-.495zM25.52 1.188v23.037h-4.351V1.188h4.351zM12.022 11.631h4.624V7.263h-4.624a5.42 5.42 0 0 0-2.218.461 5.54 5.54 0 0 0-1.809 1.229c-.512.512-.921 1.115-1.229 1.809-.296.694-.444 1.433-.444 2.218v7.679h5.631c.41 0 .717.165.922.495.216.319.324.745.324 1.28 0 .58-.125 1.092-.375 1.536a3.49 3.49 0 0 1-.99 1.092c-.398.296-.859.518-1.382.666a5.87 5.87 0 0 1-1.604.222 5.81 5.81 0 0 1-1.587-.222 4.45 4.45 0 0 1-1.382-.666c-.398-.284-.722-.643-.973-1.075-.239-.432-.358-.939-.358-1.519V10.13H.179v12.338c0 1.308.245 2.452.734 3.43a7.42 7.42 0 0 0 1.962 2.44c.819.66 1.746 1.149 2.781 1.468 1.047.33 2.11.495 3.191.495a10.61 10.61 0 0 0 3.208-.495c1.047-.33 1.974-.825 2.781-1.485.819-.648 1.479-1.468 1.979-2.457.5-.978.751-2.122.751-3.43 0-.91-.12-1.741-.358-2.491s-.597-1.394-1.075-1.928c-.466-.546-1.052-.967-1.758-1.263-.694-.296-1.502-.444-2.423-.444h-1.28V12.98c0-.387.131-.705.393-.956a1.3 1.3 0 0 1 .956-.393zM9.394 33.32a2.24 2.24 0 0 0-.171.87 2.11 2.11 0 0 0 .171.853 2.38 2.38 0 0 0 .478.7 2.25 2.25 0 0 0 .7.478 2.24 2.24 0 0 0 .87.171 2.11 2.11 0 0 0 .853-.171c.273-.114.506-.273.7-.478.205-.193.364-.427.478-.7.114-.262.171-.546.171-.853a2.24 2.24 0 0 0-.171-.87 2.25 2.25 0 0 0-.478-.7 2.14 2.14 0 0 0-.7-.461c-.262-.114-.546-.171-.853-.171a2.24 2.24 0 0 0-.87.171 2.41 2.41 0 0 0-.7.461 2.72 2.72 0 0 0-.478.7zm-5.256 0a2.24 2.24 0 0 0-.171.87 2.11 2.11 0 0 0 .171.853 2.38 2.38 0 0 0 .478.7 2.25 2.25 0 0 0 .7.478 2.24 2.24 0 0 0 .87.171 2.11 2.11 0 0 0 .853-.171c.273-.114.506-.273.7-.478.205-.193.364-.427.478-.7a1.95 1.95 0 0 0 .188-.853c0-.307-.063-.597-.188-.87a2.25 2.25 0 0 0-.478-.7 2.14 2.14 0 0 0-.7-.461c-.262-.114-.546-.171-.853-.171a2.24 2.24 0 0 0-.87.171 2.41 2.41 0 0 0-.7.461 2.72 2.72 0 0 0-.478.7z" />
        </svg>
      </Link>
      <search>
        <form action="" className={styles["search-form"]}>
          <input
            type="text"
            className={styles["search-input"]}
            placeholder="ابحث"
            aria-label="بحث"
            name="search"
          />
          <button aria-label="زر البحث" className={styles["search-button"]}>
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.477 2.01575C8.08606 2.01575 2.91699 7.03278 2.91699 13.2357C2.91699 19.4387 8.08606 24.4557 14.477 24.4557C16.7587 24.4557 18.8704 23.8061 20.6607 22.7026L29.012 30.8082L31.902 28.0032L23.657 20.0214C25.1392 18.1342 26.037 15.7958 26.037 13.2357C26.037 7.03278 20.8679 2.01575 14.477 2.01575ZM14.477 4.65575C19.3725 4.65575 23.317 8.48426 23.317 13.2357C23.317 17.9872 19.3725 21.8157 14.477 21.8157C9.58152 21.8157 5.63699 17.9872 5.63699 13.2357C5.63699 8.48426 9.58152 4.65575 14.477 4.65575Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </search>
      <ul
        className={styles[!clicked ? "hide-list" : "show-list"]}
        id="navbar-links"
      >
        <li>
          <Link href="#">التواصل</Link>
        </li>
        <li>
          <Link href="#">الفروع</Link>
        </li>
      </ul>
      <Link href="/account" className={styles["account-link"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
        >
          <rect
            width="33"
            height="33"
            x="1.368"
            y="1.266"
            stroke="#000"
            strokeWidth="2"
            rx="2.96"
          />
          {status === "authenticated" ? (
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M21.334 19.835c2.527-1.235 4.267-3.831 4.267-6.833 0-4.198-3.403-7.601-7.601-7.601s-7.601 3.403-7.601 7.601c0 3.002 1.74 5.598 4.267 6.833-.331.102-.658.22-.979.354a11.27 11.27 0 0 0-6.099 6.099 11.27 11.27 0 0 0-.858 4.313h22.538a11.27 11.27 0 0 0-3.301-7.968 11.27 11.27 0 0 0-3.656-2.443 11.26 11.26 0 0 0-.979-.354z"
              fill="#000"
            />
          ) : (
            <path
              fill="#000"
              d="M22.946 13.064c0 2.709-2.235 4.973-5.078 4.973-2.842 0-5.078-2.264-5.078-4.973s2.236-4.973 5.078-4.973 5.078 2.264 5.078 4.973m-.556 6.81c2.243-1.455 3.724-3.962 3.724-6.81 0-4.496-3.691-8.142-8.246-8.142-4.554 0-8.246 3.646-8.246 8.142 0 2.848 1.482 5.355 3.725 6.81a11.8 11.8 0 0 0-3.786 2.505 11.6 11.6 0 0 0-2.554 3.774 11.5 11.5 0 0 0-.898 4.457h3.168c0-1.108.221-2.206.652-3.232a8.5 8.5 0 0 1 1.858-2.744 8.6 8.6 0 0 1 2.787-1.84 8.7 8.7 0 0 1 6.589 0 8.6 8.6 0 0 1 2.788 1.84 8.5 8.5 0 0 1 1.858 2.744 8.4 8.4 0 0 1 .65 3.232h3.169c0-1.53-.305-3.045-.898-4.457a11.6 11.6 0 0 0-2.553-3.774 11.8 11.8 0 0 0-3.787-2.505"
            />
          )}
        </svg>
        <span className={styles["account-icon-text"]}>حسابي</span>
      </Link>
      <svg
        className={styles["cart-icon"]}
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        height="35"
        width="35"
        viewBox="0 0 489 489"
      >
        <path d="M440.1 422.7l-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z" />
      </svg>
    </nav>
  );
}
