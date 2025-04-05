import {signIn} from "../utils/auth/auth";
import styles from "./SignInForm.module.css";


async function submitEmail(formData : FormData) {
  "use server";
  await signIn("resend", formData);
}

export default function SignInForm() {
  return (
    <form action={submitEmail} className={styles["login-form"]}>
      <label htmlFor="email">ادخل البريد الالكتروني</label>
      <input type="text" name="email" placeholder="Email" />
      <button type="submit" className={styles["primary-button"]}>
        تسجيل الدخول
      </button>
    </form>
  );
}
