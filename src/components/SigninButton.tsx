"use client";
import {useFormStatus} from "react-dom";

export default function SigninButton() {
  const {pending} = useFormStatus();
  return (
    <button type="submit" className="primary-btn" disabled={pending}>
      {pending ? "جاري التحميل ..." : "تسجيل الدخول"}
    </button>
  );
}
