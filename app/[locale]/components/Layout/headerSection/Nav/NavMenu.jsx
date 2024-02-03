import NavLink from "./NavLink"
import LanguageSwitcher from "../LanguageSwitcher"
import { useTranslations } from "next-intl"
// import useActiveSection from "./hook/useActiveSection"
const NavMenu = () => {
  const navbar = useTranslations("Navbar")
  const navLinks = [
    { href: "#about", linkname: navbar("about") },
    { href: "#work", linkname: navbar("work") },
    { href: "#contact", linkname: navbar("contact") },
  ]
  // const sectionIds = ["about", "work", "contact"]
  // const activeSection = useActiveSection(sectionIds)
  // console.log(activeSection)
  return (
    <ul className="hidden text-white font-semibold md:flex p-4 md:p-0 md:space-x-8 items-center">
      {navLinks?.map(({ href, linkname }, index) => {
        return (
          <NavLink
            key={index}
            href={href}
            linkName={linkname}
            // isActive={activeSection === linkname}
          />
        )
      })}
      <LanguageSwitcher />
    </ul>
  )
}

export default NavMenu
