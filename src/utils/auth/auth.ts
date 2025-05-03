import NextAuth from "next-auth";
import {SupabaseAdapter} from "@auth/supabase-adapter";
import Resend from "next-auth/providers/resend";
import sendVerificationRequest from "./authSendRequest";

// Extend the User type to include the is_vip property
declare module "next-auth" {
  interface User {
    is_vip?: boolean;
  }

  interface Session {
    user: User;
  }
}

export const {handlers, auth, signIn, signOut} = NextAuth({
  // Explicit JWT strategy
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days*
  },
  // Required for Vercel deployments
  trustHost: true,

  // Configure authentication provider(Resend)
  providers: [
    Resend({
      from: process.env.RESEND_EMAIL_FROM!,
      sendVerificationRequest,
    }),
  ],
  pages: {
    verifyRequest: "/verify-request",
    signIn: "/account",
  },

  // Configure Supabase
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),

  // add user info to session with JWT
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.is_vip = user.is_vip;
      }
      return token;
    },
    session({session, token}) {
      session.user.is_vip = token.is_vip as boolean;
      return session;
    },
  },
});
