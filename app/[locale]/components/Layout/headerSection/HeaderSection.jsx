"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"
import NavMenu from "./Nav/NavMenu"
import MobileNav from "./MobileNav"
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false)
  const [headerOnScroll, setHeaderOnScroll] = useState(false)

  useEffect(() => {
    const checkingScroll = () => {
      const shouldSetHeaderOnScroll = window.scrollY >= 100
      setHeaderOnScroll(shouldSetHeaderOnScroll)
    }
    window.addEventListener("scroll", checkingScroll)
    return () => window.removeEventListener("scroll", checkingScroll)
  }, [])

  return (
    <section
      className={` ${
        headerOnScroll ? "bg-black/75" : "bg-black/20"
      } transition duration-300 z-20 fixed top-0 left-0 right-0`}
    >
      <header
        className={` px-5 md:px-8 flex  justify-between  flex-wrap items-center`}
      >
        <Link href={"/"} className="text-5xl  font-semibold">
          <Image
            src={"/logo.png"}
            priority
            width={70}
            height={100}
            className="w-auto h-auto"
            alt="website logo"
          />
        </Link>
        <div className="block md:hidden text-white">
          {openNav ? (
            <button
              onClick={() => setOpenNav(false)}
              className="text-slate-200 flex items-center py-2 px-3 border border-slate-200 rounded hover:text-white hover:border-[#BED250]"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpenNav(true)}
              className="text-slate-200 flex items-center py-2 px-3 border border-slate-200 rounded hover:text-white hover:border-[#BED250]"
            >
              <FaBars className="w-5 h-5" />
            </button>
          )}
        </div>
        {!openNav && <NavMenu />}
      </header>
      {openNav && <MobileNav />}
    </section>
  )
}

export default NavBar
