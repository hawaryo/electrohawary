import {signIn} from "../utils/auth/auth";
import styles from "./SignInForm.module.css";
import SigninButton from "./SigninButton";

async function submitEmail(formData: FormData) {
  "use server";
  await signIn("resend", formData);
}

export default function SignInForm() {
  return (
    <form action={submitEmail} className={styles["login-form"]}>
      <label htmlFor="email" className={styles["form-label"]}>
        ادخل البريد الالكتروني
      </label>
      <input
        type="text"
        name="email"
        className={styles["form-input"]}
        required
      />
      <SigninButton />
    </form>
  );
}
