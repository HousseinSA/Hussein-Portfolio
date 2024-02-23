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
  console.log(imgLink)
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
        <TbBrandNextjs size={70} color="white" />
      ) : title === "Github" ? (
        <FaGithub size={70} color="white" />
      ) : title === "express" ? (
        <SiExpress size={70} color="white" />
      ) : (
        <Image
          src={imgLink && imgLink}
          alt={title}
          width={70}
          height={70}
          className={`${title === "Nextjs" && "icon"}`}
        />
      )}
    </motion.div>
  )
}

export default SkillImage
