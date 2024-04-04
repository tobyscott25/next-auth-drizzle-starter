"use client"; // "use client" directive required here because SessionProvider uses React's UseContext under the hood

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
