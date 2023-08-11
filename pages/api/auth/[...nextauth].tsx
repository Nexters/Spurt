import NextAuth, { TokenSet } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }: any) => {
      if (account?.access_token) {
        token.access_token = account.access_token;
        if (Date.now() < account.expires_at * 1000) {
          return token;
        } else {
          try {
            // https://accounts.google.com/.well-known/openid-configuration
            // We need the `token_endpoint`.
            const response = await fetch(
              'https://oauth2.googleapis.com/token',
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                  client_id: process.env.GOOGLE_ID!,
                  client_secret: process.env.GOOGLE_SECRET!,
                  grant_type: 'refresh_token',
                  refresh_token: token.refresh_token,
                }),
                method: 'POST',
              },
            );

            const tokens: TokenSet = await response.json();

            const expires_in = tokens.expires_in as number;

            if (!response.ok) throw tokens;

            return {
              ...token, // Keep the previous token properties
              access_token: tokens.access_token,
              expires_at: Math.floor(Date.now() / 1000 + expires_in),
              // Fall back to old refresh token, but note that
              // many providers may only allow using a refresh token once.
              refresh_token: tokens.refresh_token ?? token.refresh_token,
            };
          } catch (error) {
            console.error('Error refreshing access token', error);
            // The error property will be used client-side to handle the refresh token error
            return { ...token, error: 'RefreshAccessTokenError' as const };
          }
        }
      }
      return token;
    },
    async session({ session, token }: any) {
      session.access_token = token.access_token;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

export default NextAuth(authOptions);

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token: string;
    error?: 'RefreshAccessTokenError';
  }

  interface JWT {
    access_token: string;
    expires_at: number;
    refresh_token: string;
    error?: 'RefreshAccessTokenError';
  }
}

export interface SpurtUser {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}
