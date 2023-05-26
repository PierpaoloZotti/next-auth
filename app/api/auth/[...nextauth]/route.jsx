import NextAuth from "next-auth/next";
import prisma from "../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

export const authOptions = {
   adapter: PrismaAdapter(prisma),
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_ID,
         clientSecret: process.env.GOOGLE_SECRET,
      }),
      CredentialsProvider({
         name: "credentials",
         credentials: {
            email: { label: "email", type: "text", placeholder: "type your email..." },
            password: { label: "password", type: "password", placeholder: "type your password..." },
            username: { label: "username", type: "text", placeholder: "type your username..." },
         },
         async authorize(credentials) {
            //Check email and password if existing and matching
            if (!credentials.email || !credentials.password) {
               throw new Error("Please enter a valid email and password");
            }

            // check if user exists already
            const user = await prisma.user.findUnique({
               where: { email: credentials.email },
            });

            //if no user found
            if (!user || !user?.hashedPassword) {
               throw new Error("No user found");
            }

            // check if password is correct
            const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

            // if password not match
            if (!passwordMatch) {
               throw new Error("Wrong password");
            }

            return user;
         },
      }),
   ],
   secret: process.env.SECRET,
   session: {
      strategy: "jwt",
   },
   debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
