import SignOutButton from "./SignOutButton";
import {auth} from "../utils/auth/auth";
import styles from "./UserAccount.module.css";
export default async function UserAccount() {
    const session = await auth();
    console.log(session);
  return (
    <section className={styles["main"]}>
      <img
        src="https://hawaryonline.com/user/user-img-default.avif"
        alt="صورة المستخدم"
        width={300}
        height={300}
        className={styles["account-img"]}
      />
      <div className={styles["account-info"]}>
        <h2 className={styles["account-email"]}>
          البريد الالكتروني : {session?.user?.email}
        </h2>
        <SignOutButton />
      </div>
    </section>
  );
}
