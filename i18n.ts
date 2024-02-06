import { getRequestConfig } from "next-intl/server"
import { locales } from "./navigation"
export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locales.includes(locale)
      ? import(`./messages/${locale}.json`)
      : import("./messages/en.json"))
  ).default,
}))
