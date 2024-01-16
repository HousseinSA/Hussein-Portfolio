"use client"
import Link from "next/link"
import NavLink from "./NavLink"
import Image from "next/image"
import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"
import NavMenu from "./NavMenu"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
const NavBar = () => {
  const navbar = useTranslations("Navbar")
  const [openNav, setOpenNav] = useState(false)
  return (
    <nav className="py-2 px-5 md:px-8  flex fixed top-0 left-0 right-0 z-10 bg-[#121212]  justify-between flex-wrap  items-center bg-opacity-90">
      <Link href={"/"} className="text-5xl text-white font-semibold">
        <Image src={"/logo.png"} width={70} height={100} alt="website logo" />
      </Link>
      <div className="mobid-menu block md:hidden text-white">
        {openNav ? (
          <button
            onClick={() => setOpenNav(false)}
            className="text-slate-200 flex items-center py-2 px-3 border border-slate-200 rounded hover:text-white hover:border-[#BED250]"
          >
            <IoMdClose className="w-5 h-5 " />
          </button>
        ) : (
          <button
            onClick={() => setOpenNav(true)}
            className="text-slate-200 flex items-center py-2 px-3 border border-slate-200 rounded hover:text-white hover:border-[#BED250]"
          >
            <FaBars className="w-5 h-5 " />
          </button>
        )}
      </div>
      <div
        className="menu font-semibold hidden md:block  md-w-auto   "
        id="navbar"
      >
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 items-center ">
          <NavLink href={"#about"} linkName={navbar("about")} />
          <NavLink href={"#work"} linkName={navbar("work")} />
          <NavLink href={"#contact"} linkName={navbar("contact")} />
          <LanguageSwitcher />
        </ul>
      </div>
      {openNav && <NavMenu />}
    </nav>
  )
}

export default NavBar
