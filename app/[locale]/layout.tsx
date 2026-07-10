import { Inter, Cairo } from "next/font/google"
import "./globals.css"
import { useLocale } from "next-intl"
import { NextIntlClientProvider, useMessages } from "next-intl"
import ArrowNavigator from "./components/Layout/ArrowNavigator"

const inter = Inter({ subsets: ["latin"] })
const cairo = Cairo({ subsets: ["arabic"] })

export const metadata = {
  title: "Hussein's Portfolio",
  description: "A portfolio to showcase my work.",
  icons: {
    icon: "/favicon.svg",
  },
  link: [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
    },
  ],
}

export default function LocaleLayout({ children }) {
  const messages = useMessages()
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <body
        className={`${isArabic ? cairo.className : inter.className} relative bg-[#121212] overflow-y-scroll overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <ArrowNavigator />
      </body>
    </html>
  )
}
