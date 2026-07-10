"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { FaBars } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"
import { useLocale } from "next-intl"

import NavMenu from "./Nav/NavMenu"
import MobileNav from "./MobileNav"

const HeaderSection = () => {
  const [openNav, setOpenNav] = useState(false)
  const [headerOnScroll, setHeaderOnScroll] = useState(false)
  const locale = useLocale()
  const isArabic = locale === "ar"
  const headerRef = useRef(null)

  useEffect(() => {
    const checkingScroll = () => {
      const shouldSetHeaderOnScroll = window.scrollY >= 100
      setHeaderOnScroll(shouldSetHeaderOnScroll)
    }
    window.addEventListener("scroll", checkingScroll)
    return () => window.removeEventListener("scroll", checkingScroll)
  }, [openNav])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenNav(false)
      }
    }

    if (openNav) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openNav])

  const headerBackground =
    headerOnScroll && !openNav
      ? "bg-gradient-to-b from-[#0f172a]/50 to-[#1a1f35]/30 backdrop-blur-md"
      : "bg-gradient-to-b from-[#0f172a]/90 to-[#1a1f35]/70 backdrop-blur-md"

  return (
    <section
      ref={headerRef}
      className={` ${headerBackground} transition duration-300 z-20 fixed top-0 left-0 right-0`}
    >
      <header
        className={`px-5 md:px-8 py-4 flex justify-between items-center gap-4`}
      >
        <Link href={"/"} className="text-5xl font-semibold">
          <Image
            src={"/logo.png"}
            priority
            width={70}
            height={70}
            sizes="(min-width: 1500px) 342px,
                          (min-width: 1040px) calc(25.68vw - 38px),
                          (min-width: 780px) calc(31.25vw - 79px),
                          (min-width: 520px) 342px,
                          calc(97vw - 143px)"
            alt="website logo"
          />
        </Link>
        <div className="flex-1"></div>
        <div className={`block md:hidden text-white ${isArabic ? "ml-auto" : ""}`}>
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
      {openNav && <MobileNav onClose={() => setOpenNav(false)} />}
    </section>
  )
}

export default HeaderSection
