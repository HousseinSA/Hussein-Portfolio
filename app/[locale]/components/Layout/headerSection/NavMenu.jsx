"use client"
import NavLink from "./NavLink"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
const NavMenu = () => {
  const navbar = useTranslations("Navbar")
  return (
    <ul className="flex flex-col font-semibold  py-4 justify-center  items-center w-full">
      <NavLink href={"#about"} linkName={navbar("about")} />
      <NavLink href={"#work"} linkName={navbar("work")} />
      <NavLink href={"#contact"} linkName={navbar("contact")} />
      <LanguageSwitcher />
    </ul>
  )
}

export default NavMenu
