import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  strategy: "jwt",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // credentials: {
      //     username: { label: "Username", type: "text", placeholder: "jsmith" },
      //     password: { label: "Password", type: "password" }
      // },
      async authorize(credentials, req) {
        if (
          credentials?.username === "abc" &&
          credentials?.password === "1234"
        ) {
           
          return {
            user: {
              name: "ABC",
              id: "1234",
              email: "abc@gmail.com",
              token:'vsdggregt4534tfds'
            },
          };
        }

        return null;
      },
    }),
  ],

    callbacks: {
      async jwt({ token, user }) {
        return { ...token, ...user };
      },

      async session({ session, token, user }) {
        session.user = token;
        return session;
      },
    },
};

export default NextAuth(authOptions);
