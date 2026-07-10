"use client"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"

const SectionTitle = ({ title }) => {
  const locale = useLocale()
  const isArabic = locale === "ar"

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionTitleVariants}
      className="relative w-full"
    >
      <div className="flex flex-col gap-4 items-center md:items-start w-full">
        <div className={`flex items-center gap-4 ${\n          isArabic ? "flex-row-reverse justify-start" : "justify-center md:justify-start"\n        }`}>\n          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#BED250] to-[#109C81] uppercase tracking-widest py-2 whitespace-nowrap">\n            {title}\n          </h1>\n          <div className={`h-1 rounded-full bg-gradient-to-r from-[#BED250] via-[#109C81] to-transparent ${\n            isArabic ? "w-32 md:w-48" : "w-full md:flex-1 md:min-w-[100px]"\n          }`}></div>\n        </div>\n      </div>\n    </motion.div>\n  )\n}

export default SectionTitle
