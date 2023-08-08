import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    jwt: ({ token, account }) => {
      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.access_token = token.access_token;
      // if (session) {
      //   session = Object.assign({}, session, {
      //     access_token: token.access_token,
      //   });
      // }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

export default NextAuth(authOptions);
