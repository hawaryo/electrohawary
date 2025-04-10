import {signOut} from "../utils/auth/auth";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="primary-btn">
        تسجيل الخروج
      </button>
    </form>
  );
}