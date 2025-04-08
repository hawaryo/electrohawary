import styles from "./page.module.css";
import SignInForm from "@/component/SignInForm";
import UserAccount from "@/component/SignInForm";
import {auth} from "../../../utils/auth/auth";

//if user seeins >>>> account  elase >>>>> login
export default async function Account() {
  const session = await auth();

  return (
    <main className={styles["main"]}>
      {session ? <UserAccount /> : <SignInForm />}
    </main>
  );
}
