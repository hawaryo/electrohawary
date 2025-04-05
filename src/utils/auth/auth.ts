import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import Resend from "next-auth/providers/resend"

export const {handlers, auth, signIn, signOut} = NextAuth({
  // Explicit JWT strategy

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days*
  },

  trustHost: true, // Required for Vercel deployments

  providers: [Resend({from: process.env.RESEND_EMAIL_FROM!})],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
});