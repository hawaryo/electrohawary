import SignOutButton from "./SignOutButton";
import {auth} from "../utils/auth/auth";
import styles from "./UserAccount.module.css";
export default async function UserAccount() {
    const session = await auth();
  return (
    <section className={styles["main"]}>
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/user/user-img-default.avif`}
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
