import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { prismaClient } from "@/lib/dbClient";


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
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      await prismaClient.user.create({
        data: {
          email: profile?.email as string,
          username: profile?.name as string,
          image: profile?.picture as string,
        },
      });
      console.log(profile); // this contain the user profile details like name, email, image etc
      // console.log(account); this contain the user account details like token and provider
      

      // await prismaClient.user.upsert({
      //   where: {
      //     email: profile?.email as string,
      //   },
      //   update: {
      //     email: profile?.email as string,
      //     username: profile?.name as string,
      //     image: profile?.picture as string,
      //   },
      //   create: {
      //     email: profile?.email as string,
      //     username: profile?.name as string,
      //     image: profile?.picture as string,
      //   },
      
      
      // })
      return true; // Return true to allow sign in and false for acces denied
    },
  },
};
export default authOptions;
