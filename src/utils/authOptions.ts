// import bcrypt from "bcrypt";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { NextAuthOptions } from "next-auth";
// import { prismaClient } from "@/lib/dbClient";

// export const authOptions: NextAuthOptions = {
//   adapter : PrismaAdapter(prismaClient),
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({  
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: { label: "email", type: "email", placeholder: "email" },
//         password: {
//           label: "password",
//           type: "password",
//           placeholder: "password",
//         },
//       },
//       async authorize(credentials) {
//         // Add logic here to look up the user from the credentials supplied
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Please provide email and password");
//         }

//         const user = await prismaClient.user.findUnique({
//           where: {
//             email: credentials.email,
//           },
//         });
//         if (!user || !user?.hashedPassword) {
//           throw new Error("Email Or Password are incorrect");
//         }
//         const passwordMatch = await bcrypt.compare(
//           credentials.password,
//           user.hashedPassword
//         );
//         if (!passwordMatch) {
//           throw new Error("Email Or Password are incorrect");
//         }
//         return user;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/", // if there is an error it will redirect to this page of the sign in in our case its the home page
//   },
//   secret: process.env.NEXTAUTHSECRET, // Add a secret to encrypt the JWT token
//   session: {
//     strategy: "jwt",
//   },
//   debug: process.env.NODE_ENV == "development", // to help us detetct any error,
// };
// export default authOptions;




import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "@/lib/dbClient"

const authOptions: AuthOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default authOptions;