import { createSharedPathnamesNavigation } from "next-intl/navigation"

export const locales = ["en", "fr", "ar"]

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
  })
