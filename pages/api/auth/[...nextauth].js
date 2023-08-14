import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        dbConnect();

        const user = await User.findOne({
          username: credentials.username,
        }).select("+password");

        if (!user) {
          throw new Error("No user with a matching username was found.");
        }

        const pwValid = await user.comparePassword(credentials.password);

        if (!pwValid) {
          throw new Error("Your password is invalid");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          _id: user._id,
          username: user.username,
          role: user.role,
        };
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
