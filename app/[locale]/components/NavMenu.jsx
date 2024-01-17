"use client"
import NavLink from "./NavLink"
import LanguageSwitcher from "./LanguageSwitcher"

const NavMenu = () => {
  return (
    <ul className="flex flex-col font-semibold  py-4 justify-center  items-center w-full">
      <NavLink href={"#about"} linkName={"About"} />
      <NavLink href={"#work"} linkName={"work"} />
      <NavLink href={"#contact"} linkName={"Contact"} />
      <LanguageSwitcher />
    </ul>
  )
}

export default NavMenu
