import { Inter } from "next/font/google"
import "./globals.css"
import { useLocale } from "next-intl"
const inter = Inter({ subsets: ["latin"] })
import { NextIntlClientProvider, useMessages } from "next-intl"

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
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
