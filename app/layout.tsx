import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Navbar } from "../components/ui/navbar"

export const metadata = {
  title: "ChainCrafters - Blockchain Development Company",
  description: "Building innovative blockchain solutions that scale and improve users' lives.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="pt-16">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
