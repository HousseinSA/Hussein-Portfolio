import { Inter } from "next/font/google";
import "./globals.css";
import { useLocale } from "next-intl";
import { NextIntlClientProvider, useMessages } from "next-intl";
import ArrowNavigator from "./components/Layout/ArrowNavigator";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hussein's Portfolio",
  description: "A portfolio to showcase my work.",
  icons: {
    icon: "/favicon.svg", // Specify your favicon here
  },
};

export default function LocaleLayout({ children }) {
  const messages = useMessages();
  const locale = useLocale();

  return (
    <html lang={locale}>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <body className={`${inter.className} relative bg-[#121212] overflow-y-scroll overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <ArrowNavigator />
      </body>
    </html>
  );
}
