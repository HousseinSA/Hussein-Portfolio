import { IoMdEye } from "react-icons/io"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const ProjectLinks = ({ links, color, isPrivateRepo }) => {
  const t = useTranslations("Projects-Links")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4"
    >
      <Link
        href={links[0]}
        target="_blank"
        className="group/link relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#BED250] border border-[#BED250]/50 hover:border-[#BED250] hover:bg-[#BED250]/10 transition duration-300"
        >
          <IoMdEye size={18} />
          <span>{t("viewLive")}</span>
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default ProjectLinks
