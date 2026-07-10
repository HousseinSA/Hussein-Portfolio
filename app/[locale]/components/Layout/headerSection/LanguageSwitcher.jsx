"use client"
import React from "react"
import { useLocale } from "next-intl"
import { Link, usePathname, useRouter } from "../../../../../navigation"
import { useState, useRef, useEffect } from "react"
const LanguageSwitcher = () => {
  const locale = useLocale()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isArabic = locale === "ar"
  const switcherRef = useRef(null)

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeLanguageList = () => {
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  const languages = [
    { short: "EN", code: "en" },
    { short: "AR", code: "ar" },
    { short: "FR", code: "fr" },
  ]

  return (
    <div ref={switcherRef} className="flex z-50 items-center md:order-2 relative">
      <button
        type="button"
        onClick={handleToggleDropdown}
        className="py-1 px-2 text-sm text-[#ADB7BE] rounded hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#BED250] hover:to-[#109C81] whitespace-nowrap font-semibold"
      >
        {locale.toUpperCase()}
      </button>
      {isDropdownOpen && (
        <div
          className={`z-50 absolute top-full mt-2 bg-gradient-to-br from-[#0f172a] to-[#1a1f35] border border-[#BED250]/30 rounded-lg shadow-lg ${
            isArabic ? "right-0" : "left-0"
          }`}
          id="language-dropdown-menu"
        >
          <ul
            className="py-1 font-semibold"
            role="none"
          >
            {languages.map(({ short, code }, index) => {
              const isActive = code === locale
              return (
                <Link
                  href={"/"}
                  locale={code}
                  key={index}
                  onClick={closeLanguageList}
                >
                  <button className={`block px-3 py-1 text-xs w-full text-left transition-colors ${
                    isActive
                      ? "text-[#BED250] bg-[#BED250]/10"
                      : "text-[#ADB7BE] hover:text-[#BED250] hover:bg-[#BED250]/5"
                  }`}>
                    {short}
                  </button>
                </Link>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
