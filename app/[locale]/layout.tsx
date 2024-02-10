import { Inter } from "next/font/google"
import "./globals.css"
import { useLocale } from "next-intl"
const inter = Inter({ subsets: ["latin"] })
import { NextIntlClientProvider, useMessages } from "next-intl"
import ArrowNavigator from "./components/Layout/ArrowNavigator"
export const metadata = {
  title: "hussein's portfolio",
  description: "a portfolio to showcase my work.",
}

export default function LocaleLayout({ children }) {
  const messages = useMessages()
  const locale = useLocale()
  return (
    <html lang={locale}>
      <link rel="icon" href="/favicon.svg" />
      <body
        className={`${inter.className} relative bg-[#121212] overflow-y-scroll overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <ArrowNavigator />
      </body>
    </html>
  )
}
