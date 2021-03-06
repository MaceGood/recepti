import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter";
import { connection } from "../../../lib/db";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  adapter: TypeORMLegacyAdapter(connection),
  secret: process.env.SECRET,
});
