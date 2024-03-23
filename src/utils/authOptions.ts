import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { prismaClient } from "@/lib/dbClient";
import { authActions } from "@/redux/authSlice/authSlice";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      let userFromDb = await prismaClient.user.findUnique({
        where: {
          email: profile?.email as string,
        },
      });
      if (!userFromDb) {
        userFromDb = await prismaClient.user.create({
          data: {
            email: profile?.email as string,
            username: profile?.name as string,
            image:
              (profile?.picture as string) || (profile?.avatar_url as string),
          },
        });
      } else {
        await prismaClient.user.update({
          where: {
            email: profile?.email as string,
          },
          data: {
            username: profile?.name as string,
            image:
              (profile?.picture as string) || (profile?.avatar_url as string),
          },
        });
      }

      if (user) {
        user.id = userFromDb.id;
      }
      return true; // Return true to allow sign in and false for acces denied
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
};
export default authOptions;
