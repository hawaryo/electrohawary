import {EmailConfig} from "next-auth/providers";

type Props = {identifier: string; url: string; provider: EmailConfig};

export default async function sendVerificationRequest({
  identifier,
  url,
  provider,
}: Props) {
  // Use Resend SDK to send the email
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AUTH_RESEND_KEY}`,
    },
    body: JSON.stringify({
      from: provider.from,
      to: identifier,
      subject: "الكترو الهواري تسجيل الدخول", // Custom subject
      html: `
       <body style="width:300px;padding:20px;margin-left:auto;margin-right:auto;background-color:#f5f1ea;text-align:center;border:2px solid #000;">
         <h1 style="margin-top:2px;">الكترو الهواري</h1>
         <a href="${url}"  style="font-size:24px;font-weight:bold;display:block;text-decoration:none;background-color:#000;padding:12px;border-radius:4px;color:#ffffff;">تسجيل الدخول</a>
         <p style="margin-top:32px;margin-bottom:0px;">إذا لم تطلب هذا البريد الإلكتروني، فيمكنك تجاهله</p>
       </body>`, // Custom HTML body
    }),
  });
}
