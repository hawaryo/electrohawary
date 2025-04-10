import styles from "./page.module.css";
import SignInForm from "@/components/SignInForm";
import UserAccount from "@/components/UserAccount";
import {auth} from "../../../utils/auth/auth";

export default async function Account() {
  const session = await auth();
  
  return (
    <main className={styles["main"]}>
      {session ? <UserAccount /> : <SignInForm />}
    </main>
  );
}