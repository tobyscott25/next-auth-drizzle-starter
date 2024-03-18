import type { Metadata } from "next";
import NextAuthProvider from "@/app/context/NextAuthProvider";

export const metadata: Metadata = {
  title: "Next Auth Postgres Starter",
  description:
    "An example of how to use NextJS with Auth.js and a PostgreSQL database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
