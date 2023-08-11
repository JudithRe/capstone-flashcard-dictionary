import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/db/models/User";
import dbConnect from "@/db/connect";

export default NextAuth({
  // Enable JSON Web Tokens -> no stored sessions in db
  session: {
    jwt: true,
  },

  // login providers
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // runs upon calling the signin function
      authorize: async (credentials) => {
        await dbConnect();

        if (!dbConnect) {
          throw new Error({ error: "No connection to database!" });
        }

        // Find the user and also return the password field
        const user = await User.findOne({ email: credentials.email }).select(
          "+password"
        );

        if (!user) {
          return res
            .status(400)
            .json({ message: "No user with this name! Please sign up!" });
        }

        // Use the comparePassword method from User Model to authenticate
        const pwValid = await user.comparePassword(credentials.password);

        if (!pwValid) {
          return res
            .status(401)
            .json({ message: "Password or Email is wrong!" });
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
          email: user.email,
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
    signIn: "/signin",
  },
});
