"use client" // "use client" directive required here because SessionProvider uses React's UseContext under the hood

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

/**
 * Only required to wrap client components that need to use the useSession() hook.
 */
export default function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
