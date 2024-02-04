import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
import { NextIntlClientProvider, useMessages } from "next-intl"

export const metadata = {
  title: "hussein's portfolio",
  description: "a portfolio to showcase my work.",
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      {/* <link rel="icon" href="/favicon.svg" /> */}
      <body
        className={`${inter.className} bg-[#121212] overflow-y-scroll overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
