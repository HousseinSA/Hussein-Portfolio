import NavLink from "./NavLink"
import LanguageSwitcher from "../LanguageSwitcher"
import { useTranslations } from "next-intl"
<<<<<<< HEAD
import useVisibleSectionId from "../../../../../utils/sectionIdinViewPort"

=======
>>>>>>> parent of 3a3f531 (fixing)
const NavMenu = () => {
  const visibleSectionId = useVisibleSectionId()
  const navbar = useTranslations("Navbar")
  const navLinks = [
    { href: "#about", linkname: navbar("about") },
    { href: "#work", linkname: navbar("work") },
    { href: "#contact", linkname: navbar("contact") },
  ]
  const hashvisibleSectionId = "#" + visibleSectionId
  // console.log(hashvisibleSectionId, "section name", visibleSectionId)
  return (
    <ul className="hidden text-white font-semibold md:flex p-4 md:p-0 md:space-x-8 items-center">
      {navLinks?.map(({ href, linkname }, index) => {
        return (
          <NavLink
            key={index}
            sectionInView={hashvisibleSectionId === href}
            href={href}
            linkName={linkname}
          />
        )
      })}
      <LanguageSwitcher />
    </ul>
  )
}

export default NavMenu
