"use client";
import styles from "./ShareButton.module.css";

type props = {
  url: string;
};

export default function ShareButton({url}: props) {
  function handleClick() {
    navigator.share({
      title: "WebShare API Demo",
      url: url,
    });
  }

  return (
    <button
      onClick={handleClick}
      className={styles["share-button"]}
      aria-label="share button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="none"
      >
        <circle
          cx="18.118"
          cy="18.27"
          r="16.5"
          stroke="#000"
          stroke-width="2"
        />
        <path
          d="M14.286 13.84c.711.001 1.408-.202 2.008-.584l5.858 4.09c-.094.328-.146.675-.146 1.033s.051.705.146 1.033l-5.7 3.98c-.632-.45-1.39-.692-2.166-.691-2.069 0-3.746 1.677-3.746 3.746s1.677 3.746 3.746 3.746 3.746-1.677 3.746-3.746a3.76 3.76 0 0 0-.086-.796l5.845-4.081a3.73 3.73 0 0 0 1.961.555c2.069 0 3.746-1.677 3.746-3.746s-1.677-3.746-3.746-3.746a3.73 3.73 0 0 0-1.961.555l-5.89-4.112a3.75 3.75 0 0 0 .131-.981c0-2.069-1.677-3.746-3.746-3.746s-3.746 1.677-3.746 3.746 1.677 3.746 3.746 3.746z"
          fill="#000"
        />
      </svg>
    </button>
  );
}
