import "./NavBar.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="navbar">
      <input type="checkbox" className="checkbox" id="burger-toggle" />
      <label htmlFor="burger-toggle" className="toggle-icon">a</label>
      <svg
        className="navbar-logo"
        xmlns="http://www.w3.org/2000/svg"
        width="236"
        height="83"
        fill="none"
      >
        <path
          fill="#000"
          d="M18.347 38.08h-4.625a1.3 1.3 0 0 0-.955.393q-.393.376-.393.955v3.328h1.28q1.383 0 2.423.444a4.6 4.6 0 0 1 1.758 1.262 5.2 5.2 0 0 1 1.075 1.929q.358 1.126.358 2.491 0 1.962-.75 3.43-.75 1.485-1.98 2.457a8.3 8.3 0 0 1-2.781 1.485 10.6 10.6 0 0 1-6.4 0 8.3 8.3 0 0 1-2.781-1.468 7.4 7.4 0 0 1-1.962-2.44q-.734-1.467-.734-3.43V36.58h4.368v12.337q0 .87.359 1.519.375.648.972 1.075.614.444 1.382.666a5.87 5.87 0 0 0 3.191 0q.786-.222 1.383-.666.615-.444.99-1.092.375-.666.375-1.536 0-.802-.324-1.28-.307-.495-.922-.495H8.023v-7.679q0-1.176.444-2.218a5.9 5.9 0 0 1 1.228-1.809 5.5 5.5 0 0 1 1.81-1.228 5.4 5.4 0 0 1 2.217-.461h4.625zm-7.423 22.56q0-.462.17-.87.189-.394.478-.7.307-.291.7-.461a2.2 2.2 0 0 1 .87-.17q.46 0 .854.17.409.17.7.46.306.307.477.7.17.41.17.87 0 .461-.17.854a2 2 0 0 1-.478.7 2 2 0 0 1-.7.477q-.392.17-.853.17a2.2 2.2 0 0 1-.87-.17 2.3 2.3 0 0 1-.7-.478 2.4 2.4 0 0 1-.477-.7 2.1 2.1 0 0 1-.171-.853m-5.256 0q0-.462.17-.87.189-.394.478-.7.307-.291.7-.461.41-.17.87-.17.462 0 .854.17.41.17.7.46.306.307.477.7.188.41.188.87 0 .461-.188.854a2 2 0 0 1-.478.7 2 2 0 0 1-.7.477q-.391.17-.853.17-.46 0-.87-.17a2.3 2.3 0 0 1-.7-.478 2.4 2.4 0 0 1-.477-.7 2.1 2.1 0 0 1-.171-.853M27.22 27.636v23.037H22.87V27.637zm11.007 6.075v14.624l-.017.495q-.018.461-.205 1.177a9.6 9.6 0 0 1-.58 1.639q-.41.921-1.195 1.877-.785.972-2.013 1.91-1.23.94-3.038 1.707l-1.69-4.027a11 11 0 0 0 1.468-.75q.649-.377 1.11-.786.477-.392.785-.785.306-.375.512-.716.46-.819.494-1.605v-14.76zm5.887 18.685h5.46q.975 0 1.741-.443a2.92 2.92 0 0 0 1.178-1.28h-5.034a5.4 5.4 0 0 1-2.185-.444 5.9 5.9 0 0 1-1.791-1.194 5.9 5.9 0 0 1-1.195-1.792 5.4 5.4 0 0 1-.444-2.184v-3.447q0-1.639.598-3.072a8.2 8.2 0 0 1 1.655-2.508 7.8 7.8 0 0 1 2.457-1.69 7.2 7.2 0 0 1 2.986-.631q1.605 0 3.004.648 1.416.631 2.457 1.707a7.9 7.9 0 0 1 1.655 2.491q.615 1.416.615 2.97v4.794h3.157v4.352h-3.311a7.4 7.4 0 0 1-1.007 2.389 7.9 7.9 0 0 1-1.706 1.928 7.6 7.6 0 0 1-2.236 1.28 7.1 7.1 0 0 1-2.593.478h-5.461zm8.805-6.075v-4.795q0-.683-.256-1.314-.256-.63-.716-1.092a3.3 3.3 0 0 0-1.093-.75 3 3 0 0 0-1.313-.29 3.2 3.2 0 0 0-1.314.272q-.598.274-1.058.751a3.8 3.8 0 0 0-.717 1.127 3.7 3.7 0 0 0-.256 1.382v3.447q0 .529.358.904.375.358.905.358zm6.075 4.352v-4.352h3.157v-2.628q0-1.023.307-1.928a5.9 5.9 0 0 1 .853-1.655q.546-.734 1.28-1.263a5.2 5.2 0 0 1 1.638-.802 7 7 0 0 1 1.468-1.791 10 10 0 0 1 2.03-1.366q1.11-.562 2.355-.87a10.7 10.7 0 0 1 2.526-.307q1.552 0 2.986.444a7 7 0 0 1 2.56 1.399q1.109.956 1.775 2.474.665 1.502.665 3.635v4.658h3.208v4.352zm14.47-4.352h4.779v-4.658q0-.956-.307-1.638a3.04 3.04 0 0 0-.82-1.11 3.1 3.1 0 0 0-1.16-.648 4.5 4.5 0 0 0-1.348-.205q-.921 0-1.809.24-.87.238-1.587.682a5.6 5.6 0 0 1 1.655 1.996q.615 1.195.598 2.645zm-6.945 0h2.577v-2.696q0-.306-.102-.563a1.1 1.1 0 0 0-.273-.46 1.1 1.1 0 0 0-.41-.308 1.1 1.1 0 0 0-.512-.12q-.545 0-.921.445-.36.426-.359 1.075zm25.665-18.685v17.389q0 1.16-.443 2.2a5.6 5.6 0 0 1-1.229 1.793 5.7 5.7 0 0 1-1.809 1.211 5.5 5.5 0 0 1-2.201.444h-2.116v-4.352h2.116q.563 0 .938-.375.393-.375.393-.922V27.638zm7.935 0v23.037h-4.351V27.637zm11.433 24.76h5.478q.972 0 1.741-.443a2.93 2.93 0 0 0 1.177-1.28h-5.034a5.4 5.4 0 0 1-2.184-.444 5.9 5.9 0 0 1-1.792-1.194 5.7 5.7 0 0 1-1.212-1.792 5.45 5.45 0 0 1-.443-2.184v-3.447q0-1.639.597-3.072a8.2 8.2 0 0 1 1.655-2.508 7.9 7.9 0 0 1 2.457-1.69 7.3 7.3 0 0 1 3.004-.631q1.604 0 3.003.648 1.416.631 2.457 1.707a7.9 7.9 0 0 1 1.656 2.491q.614 1.416.614 2.97v7.508a7.4 7.4 0 0 1-.614 2.986 7.6 7.6 0 0 1-1.639 2.457 7.5 7.5 0 0 1-2.457 1.655 7.35 7.35 0 0 1-2.986.615h-5.478zm8.823-6.075v-4.795q0-.683-.273-1.314a3.3 3.3 0 0 0-.717-1.092 3.4 3.4 0 0 0-1.075-.75 3.04 3.04 0 0 0-1.314-.29q-.7 0-1.314.272a3.5 3.5 0 0 0-1.058.751 3.8 3.8 0 0 0-.717 1.127q-.255.648-.256 1.382v3.447q0 .529.359.904.375.358.904.358zm15.34-12.61v12.61h3.157v4.352h-3.481a8.5 8.5 0 0 1-.631 1.519q-.427.819-1.212 1.672-.768.87-1.962 1.706-1.195.837-2.918 1.553l-1.672-4.01q.836-.36 1.467-.75.648-.376 1.109-.769.46-.375.768-.75.308-.36.512-.7.46-.785.495-1.536V33.712zm11.382 0v12.61h3.174v4.352h-12.798v-4.352h5.273v-12.61zm-4.385-3.857q0-.46.17-.853.171-.41.461-.7a2.3 2.3 0 0 1 .7-.477q.41-.188.87-.188.461 0 .853.188.41.17.7.477.307.29.478.7.17.393.17.853 0 .462-.17.87a2.3 2.3 0 0 1-.478.7 2.1 2.1 0 0 1-.7.461q-.392.17-.853.17a2.2 2.2 0 0 1-.87-.17 2.4 2.4 0 0 1-.7-.46 2.4 2.4 0 0 1-.461-.7 2.3 2.3 0 0 1-.17-.87m-5.256 0q0-.46.171-.853.17-.41.477-.7a2.1 2.1 0 0 1 .683-.477q.41-.188.87-.188.461 0 .853.188.41.17.7.477.307.29.478.7.188.393.188.853 0 .462-.188.87a2.3 2.3 0 0 1-.478.7 2.1 2.1 0 0 1-.7.461q-.392.17-.853.17a2.2 2.2 0 0 1-.87-.17 2.2 2.2 0 0 1-.683-.46 2.3 2.3 0 0 1-.477-.7 2.2 2.2 0 0 1-.171-.87m26.962.376-3.908 3.48q1.127.018 2.235.189 1.11.17 2.116.546a7.7 7.7 0 0 1 1.86.955 5.9 5.9 0 0 1 1.485 1.468q.631.87.99 2.065.358 1.177.358 2.713v4.675h3.157v4.352h-23.856v-4.352h16.331v-4.675q0-1.059-.444-1.74a3.16 3.16 0 0 0-1.143-1.11 4.7 4.7 0 0 0-1.605-.563 9.6 9.6 0 0 0-1.808-.17q-.905 0-1.894.153-.974.153-1.86.375-.888.205-1.605.461-.716.24-1.126.427l-1.928-3.516 9.505-8.788zm14.658-2.594v17.389q0 1.16-.444 2.2a5.6 5.6 0 0 1-1.228 1.793 5.7 5.7 0 0 1-1.809 1.211 5.5 5.5 0 0 1-2.202.444h-2.116v-4.352h2.116q.564 0 .939-.375.392-.375.392-.922V27.638zm7.935 0v23.037h-4.352V27.637z"
        />
        <rect
          width="36.492"
          height="36.606"
          x="198.663"
          y="23.371"
          fill="#372F28"
          rx="2"
        />
        <path
          fill="#E9E4DC"
          d="M205.627 54.674V29.148h5.397V39.68h10.956V29.148h5.384v25.526h-5.384V44.129h-10.956v10.545z"
        />
      </svg>
      <search>
        <form action="" className="search-form">
          <input
            type="text"
            className="search_input"
            placeholder="ابحث"
            aria-label="search"
          />
          <button aria-label="search" className="search-button">
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
      <ul role="list">
        <li>
          <Link href="#">التواصل</Link>
        </li>
        <li>
          <Link href="#">الفروع</Link>
        </li>
        <li>
          <Link href="#">تسجيل الدخول</Link>
        </li>
      </ul>
      <svg
        className="cart"
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
