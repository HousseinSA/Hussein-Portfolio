"use client"
import { motion } from "framer-motion"
import { TbBrandNextjs } from "react-icons/tb"
import { FaGithub } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import Image from "next/image"
const SkillImage = ({ index, imgLink, title }) => {
  const ImageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  const iconSize = {
    mobile: 50,
    tablet: 60,
    desktop: 70,
  }

  return (
    <motion.div
      variants={ImageVariants}
      initial="hidden"
      whileInView={"visible"}
      transition={{ delay: index * 0.3 }}
      viewport={{
        once: true,
      }}
    >
      {title === "Nextjs" ? (
        <>
          <TbBrandNextjs size={iconSize.mobile} className="sm:hidden" color="white" />
          <TbBrandNextjs size={iconSize.tablet} className="hidden sm:block md:hidden" color="white" />
          <TbBrandNextjs size={iconSize.desktop} className="hidden md:block" color="white" />
        </>
      ) : title === "Github" ? (
        <>
          <FaGithub size={iconSize.mobile} className="sm:hidden" color="white" />
          <FaGithub size={iconSize.tablet} className="hidden sm:block md:hidden" color="white" />
          <FaGithub size={iconSize.desktop} className="hidden md:block" color="white" />
        </>
      ) : title === "express" ? (
        <>
          <SiExpress size={iconSize.mobile} className="sm:hidden" color="white" />
          <SiExpress size={iconSize.tablet} className="hidden sm:block md:hidden" color="white" />
          <SiExpress size={iconSize.desktop} className="hidden md:block" color="white" />
        </>
      ) : (
        <>
          <Image
            src={imgLink && imgLink}
            alt={title}
            width={iconSize.mobile}
            height={iconSize.mobile}
            className={`sm:hidden ${title === "Nextjs" && "icon"}`}
          />
          <Image
            src={imgLink && imgLink}
            alt={title}
            width={iconSize.tablet}
            height={iconSize.tablet}
            className={`hidden sm:block md:hidden ${title === "Nextjs" && "icon"}`}
          />
          <Image
            src={imgLink && imgLink}
            alt={title}
            width={iconSize.desktop}
            height={iconSize.desktop}
            className={`hidden md:block ${title === "Nextjs" && "icon"}`}
          />
        </>
      )}
    </motion.div>
  )
}

export default SkillImage
