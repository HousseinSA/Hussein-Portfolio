import NavLink from "./Nav/NavLink"
// import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
const MobileNav = () => {
  const navbar = useTranslations("Navbar")

  return (
    <nav
      className="font-semibold h-auto w-full block md:hidden md:w-auto"
      id="navbar"
    >
      <ul className="flex flex-col font-semibold  py-4 justify-center  items-center w-full">
        <NavLink href={"#about"} linkName={navbar("about")} />
        <NavLink href={"#work"} linkName={navbar("work")} />
        <NavLink href={"#contact"} linkName={navbar("contact")} />
        {/* <LanguageSwitcher /> */}
      </ul>
    </nav>
  )
}

export default MobileNav
