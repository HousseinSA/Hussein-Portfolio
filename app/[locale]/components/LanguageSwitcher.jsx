import React, { useState } from "react"
import { useRouter, Link } from "../../../navigation"
import { useLocale } from "next-intl"

const LanguageSwitcher = () => {
  const locale = useLocale()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const handleSelectLanguage = () => {
    setIsDropdownOpen(false)
  }
  return (
    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
      <button
        type="button"
        onClick={handleToggleDropdown}
        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {locale === "en" && "English"}
        {locale === "ar" && "العربية"}
        {locale === "fr" && "Français"}
      </button>
      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          className="z-50 absolute top-full -left-10 mt-1 w-32 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          id="language-dropdown-menu"
        >
          <ul className="py-2 font-medium" role="none">
            <Link href={"/"} locale="fr">
              <button
                onClick={handleSelectLanguage}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                role="menuitem"
              >
                Francais
              </button>
            </Link>
            <Link href={"/"} locale="en">
              <button
                onClick={handleSelectLanguage}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                role="menuitem"
              >
                English
              </button>
            </Link>

            <Link href={"/"} locale="ar">
              <button
                onClick={handleSelectLanguage}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                role="menuitem"
              >
                العربية
              </button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
