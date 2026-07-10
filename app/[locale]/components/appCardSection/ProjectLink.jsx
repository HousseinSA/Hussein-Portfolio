import { FaCode } from "react-icons/fa6"
import { IoMdEye } from "react-icons/io"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const ProjectLinks = ({ links, color, isPrivateRepo }) => {
  const t = useTranslations("Projects-Links")
  const linkStyle = `w-10 h-10 ${
    color ? "text-white border-[#BED250]" : "text-white border-[#ADB7BE] "
  } p-2 rounded-full border-2 bg-[#BED250] relative group-hover/link:border-[#BED250]`

  const disabledLinkStyle = `w-10 h-10 text-gray-500 border-gray-600 p-2 rounded-full border-2 bg-gray-700 cursor-not-allowed opacity-60`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      {isPrivateRepo ? (
        <div className="group/link relative">
          <FaCode className={disabledLinkStyle} />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded whitespace-nowrap opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            {t("privateRepo")}
          </div>
        </div>
      ) : (
        <Link
          href={links[1]}
          target="_blank"
          className="group/link hover:scale-125 active:scale-100 transition duration-300 relative"
        >
          <FaCode className={linkStyle} />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded whitespace-nowrap opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            Code
          </div>
        </Link>
      )}
      <Link
        href={links[0]}
        target="_blank"
        className="group/link hover:scale-125 active:scale-100 transition duration-300 relative"
      >
        <IoMdEye className={linkStyle} />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded whitespace-nowrap opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
          {t("viewLive")}
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectLinks
