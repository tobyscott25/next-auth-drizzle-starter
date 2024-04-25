import NextAuth, {
  CredentialsSignin,
  type NextAuthConfig,
  type User,
} from "next-auth";
import { ZodError } from "zod";
import GitHub from "@auth/core/providers/github";
import Credentials from "@auth/core/providers/credentials";
import { randomBytes, randomUUID } from "crypto";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
// import saltAndHashPassword from "./utils/saltAndHashPassword";
import { signInSchema } from "./utils/zod";
import saltAndHashPassword from "./utils/saltAndHashPassword";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

const config: NextAuthConfig = {
  // AuthJS providers infer OAuth credentials from env vars. See: https://authjs.dev/reference/nextjs#environment-variable-inference
  providers: [
    GitHub,
    Credentials({
      id: "credentials",
      name: "email and password",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          console.log("signInSchema", { email, password });

          // Throws an error if used here. Maybe this code runs on the client?
          // console.log("pwHash", saltAndHashPassword(password));

          // // logic to verify if user exists
          // user = await getUserFromDb(credentials.email, pwHash)

          // if (!user) {
          //   // No user found, so this is their first attempt to login
          //   // meaning this is also the place you could do registration
          //   throw new Error("User not found.")
          // }

          throw new Error("User not found.");

          return {
            id: "1",
            name: "Test User",
            email: "asd@asd.com",
          } satisfies User;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            // return null
            throw new InvalidLoginError();
          }
          throw new InvalidLoginError();
        }
      },
    }),
  ],

  adapter: DrizzleAdapter(db),

  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "database",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },

  // Customise callback handling
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signIn", user, account, profile);
      return true;
    },
  },
};

export const { handlers, auth } = NextAuth(config);
