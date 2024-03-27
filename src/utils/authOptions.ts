import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { prismaClient } from "@/lib/dbClient";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient), // to facilate the use of Prisma with the NextAuth
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
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide email and password");
        }
        const user = await prismaClient.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user?.hashedPassword) {
          new Error("no user found ");
        }
        const passwordMatch = await bcrypt.compare(
          credentials?.password,
          user?.hashedPassword as string
        );
        if (!passwordMatch) {
          new Error("password is incorrect");
        }

        return user;

        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
  secret: process.env.SECRET, // Add a secret to encrypt the JWT token
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV == "development", // to help us detetct any error,
};
export default authOptions;
