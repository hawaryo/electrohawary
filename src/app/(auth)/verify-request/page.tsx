import styles from "./page.module.css";

export default function Account() {
  return (
    <main className={styles["main"]}>
      <h1>تفقد البريد الالكتروني</h1>
      <p>تم ارسال رابط تسجيل الدخول الى بريدك الالكتروني</p>
    </main>
  );
}
