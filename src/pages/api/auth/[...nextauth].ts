import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import getConfig from 'next/config';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const { publicRuntimeConfig } = getConfig();

const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials-provider',
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            `${publicRuntimeConfig.api.url}/auth/login`,
            {
              username: credentials?.username,
              password: credentials?.password,
            },
          );

          return Promise.resolve({
            id: data.id,
            accessToken: data.accessToken,
          });
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }

      return token;
    },
    async session({ session, token }) {
      const { accessToken } = token;

      try {
        const { data } = await axios.get(
          `${publicRuntimeConfig.api.url}/users/me`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          },
        );

        session.accessToken = accessToken;
        session.user = data;
      } catch (e) {}

      return Promise.resolve(session);
    },
  },
};

export default NextAuth(nextAuthOptions);
