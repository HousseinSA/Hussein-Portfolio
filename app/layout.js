import { Inter } from "next/font/google"
import Head from "next/head"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "hussein's portfolio",
  description: "a portfolio to showcase my work.",
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
