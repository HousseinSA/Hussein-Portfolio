// import React, { useState } from "react"
// import { Link } from "../../../../../navigation"
// import { useLocale } from "next-intl"

// const LanguageSwitcher = () => {
//   const locale = useLocale()
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const handleToggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen)
//   }
//   const handleSelectLanguage = () => {
//     setIsDropdownOpen(false)
//   }
//   return (
//     <div className="flex z-50 text-lg items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse relative">
//       <button
//         type="button"
//         onClick={handleToggleDropdown}
//         className="block py-2 pl-3 pr-4 text-[#ADB7BE]  sm:text-lg rounded md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#BED250] hover:to-[#109C81]"
//       >
//         {locale === "en" && "English"}
//         {locale === "ar" && "العربية"}
//         {locale === "fr" && "Français"}
//       </button>
//       {isDropdownOpen && (
//         <div
//           className="z-50 absolute  top-full -left-10 mt-1 w-32 bg-white divide-y divide-gray-100 rounded-lg shadow"
//           id="language-dropdown-menu"
//         >
//           <ul
//             className="py-2 font-medium text-[#ADB7BE] bg-gray-500 rounded-lg"
//             role="none"
//           >
//             <Link href={"/"} locale="fr">
//               <button
//                 onClick={handleSelectLanguage}
//                 className="block  px-4 py-2 text-sm  text-white  hover:bg-gray-600 hover:w-full text-left"
//                 role="menuitem"
//               >
//                 Francais
//               </button>
//             </Link>
//             <Link href={"/"} locale="en">
//               <button
//                 onClick={handleSelectLanguage}
//                 className="block px-4 py-2 text-sm text-white hover:bg-gray-600 hover:w-full  text-left"
//                 role="menuitem"
//               >
//                 English
//               </button>
//             </Link>

//             <Link href={"/"} locale="ar">
//               <button
//                 onClick={handleSelectLanguage}
//                 className="block px-4 py-2 text-sm text-white  hover:bg-gray-600 hover:w-full text-left"
//                 role="menuitem"
//               >
//                 العربية
//               </button>
//             </Link>
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default LanguageSwitcher

"use client"
import React from "react"
import { useLocale } from "next-intl"
import ISO6391 from "iso-639-1"
import { locales, usePathname, useRouter } from "../../../../../navigation"

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()

  const handleChange = (e) => {
    router.push(pathName, { locale: e.target.value })
  }

  return (
    <select value={locale} onChange={handleChange}>
      {locales.map((lang) => (
        <option key={lang} value={lang}>
          {ISO6391.getNativeName(lang)}
        </option>
      ))}
    </select>
  )
}

export default LanguageSwitcher
