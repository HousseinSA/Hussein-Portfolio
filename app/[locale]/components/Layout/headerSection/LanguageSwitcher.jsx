<<<<<<< HEAD
"use client"
import React from "react"
import { useLocale } from "next-intl"
import { Link, usePathname, useRouter } from "../../../../../navigation"
import { useState } from "react"
const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()
=======
import React, { useState } from "react"
import { Link } from "../../../../../navigation"
import { useLocale } from "next-intl"

const LanguageSwitcher = () => {
  const locale = useLocale()
>>>>>>> parent of 3a3f531 (fixing)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
<<<<<<< HEAD
  const closeLanguageList = () => {
    setIsDropdownOpen(false)
  }
  const handleChange = (e) => {
    router.push(pathName, { locale: e.target.value })
  }
  const languages = [
    { short: "en", name: "English" },
    { short: "ar", name: "العربية" },
    { short: "fr", name: "Français" },
  ]
=======
  const handleSelectLanguage = () => {
    setIsDropdownOpen(false)
  }
>>>>>>> parent of 3a3f531 (fixing)
  return (
    <div className="flex z-50 text-lg items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
      <button
        type="button"
        onClick={handleToggleDropdown}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE]  sm:text-lg rounded md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#BED250] hover:to-[#109C81]"
      >
<<<<<<< HEAD
        {languages?.map((lang) => {
          if (lang.short === locale) return lang.name
        })}
      </button>
      {isDropdownOpen && (
        <div
          className="z-50 absolute top-full -left-10 mt-1 w-32 bg-white divide-y divide-gray-100 rounded-lg shadow"
=======
        {locale === "en" && "English"}
        {locale === "ar" && "العربية"}
        {locale === "fr" && "Français"}
      </button>
      {isDropdownOpen && (
        <div
          className="z-50 absolute  top-full -left-10 mt-1 w-32 bg-white divide-y divide-gray-100 rounded-lg shadow"
>>>>>>> parent of 3a3f531 (fixing)
          id="language-dropdown-menu"
        >
          <ul
            className="py-2 font-medium text-[#ADB7BE] bg-gray-500 rounded-lg"
            role="none"
          >
<<<<<<< HEAD
            {languages.map(({ name, short }, index) => {
              return (
                <Link
                  href={"/"}
                  locale={short}
                  key={index}
                  onClick={closeLanguageList}
                >
                  <button className="block px-4 py-2 text-sm text-white hover:bg-gray-600 hover:w-full  text-left">
                    {name}
                  </button>
                </Link>
              )
            })}
=======
            <Link href={"/"} locale="fr">
              <button
                onClick={handleSelectLanguage}
                className="block  px-4 py-2 text-sm  text-white  hover:bg-gray-600 hover:w-full text-left"
                role="menuitem"
              >
                Francais
              </button>
            </Link>
            <Link href={"/"} locale="en">
              <button
                onClick={handleSelectLanguage}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-600 hover:w-full  text-left"
                role="menuitem"
              >
                English
              </button>
            </Link>

            <Link href={"/"} locale="ar">
              <button
                onClick={handleSelectLanguage}
                className="block px-4 py-2 text-sm text-white  hover:bg-gray-600 hover:w-full text-left"
                role="menuitem"
              >
                العربية
              </button>
            </Link>
>>>>>>> parent of 3a3f531 (fixing)
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
