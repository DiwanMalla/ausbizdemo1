/* eslint-disable @typescript-eslint/no-explicit-any */
import WordPressProvider from "next-auth/providers/wordpress";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export const authOptions = {
  providers: [
    WordPressProvider({
      clientId: process.env.WORDPRESS_CLIENT_ID,
      clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
      token: {
        url: "https://public-api.wordpress.com/oauth2/token",
        async request(context) {
          const { provider, params: parameters, checks, client } = context;

          const tokenset = await client.grant({
            grant_type: "authorization_code",
            code: parameters.code,
            redirect_uri: provider.callbackUrl as string, // Ensure this matches your actual redirect URI
            code_verifier: checks.code_verifier,
            client_id: process.env.WORDPRESS_CLIENT_ID,
            client_secret: process.env.WORDPRESS_CLIENT_SECRET,
          });

          return { tokens: tokenset };
        },
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Define this route in your Next.js project
    error: "/auth/error", // Define this route in your Next.js project
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt({ token, account }: { token: JWT; account: any }) {
      if (account?.provider === "wordpress") {
        token.accessToken = account.access_token; // Include access token if needed
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.accessToken) {
        (session as { accessToken?: string }).accessToken =
          token.accessToken as string;
      }
      return session;
    },
  },
};
