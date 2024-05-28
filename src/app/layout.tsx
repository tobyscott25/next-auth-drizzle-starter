import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/utils/cn"
import AuthProvider from "@/app/context/AuthProvider"

import "@/app/style.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Next Auth Postgres Starter",
  description: "An example of how to use NextJS with Auth.js and a PostgreSQL database",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
