import {signOut} from "../utils/auth/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="primary-btn">
        Sign Out
      </button>
    </form>
  );
}
