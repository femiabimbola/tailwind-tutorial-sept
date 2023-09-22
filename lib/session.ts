import { NextAuthOptions, User } from 'next-auth';

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
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
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: "password" },
        username: { label: "Username", type: 'text', placeholder: 'Enter a username' },
      },

      async authorize(credentials) {
        if (!credentials.email || !credentials.password) throw new Error('missing field')

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user || !user?.hashedPassword) throw new Error(' No user found')

        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

        if (!passwordMatch) throw new Error('incorrect password')

        return user;
      }
    }),
  ],

  pages: {
    signIn: './signin'
  }
}