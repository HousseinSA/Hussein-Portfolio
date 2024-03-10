"use client"

import { motion } from "framer-motion"
import { GrGithub } from "react-icons/gr"
import { SiExpress } from "react-icons/si"
import Image from "next/image"

const SkillImage = ({ index, img, tool }) => {
  const ImageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  let toolIcon
  if (tool === "Github") {
    toolIcon = <GrGithub size={70} color="white" />
  } else if (tool === "express") {
    toolIcon = <SiExpress size={70} color="white" />
  } else {
    toolIcon = <Image src={img && img} alt={tool} width={70} height={70} />
  }

  return (
    <motion.div
      variants={ImageVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.3 }}
      className="text-white"
    >
      {toolIcon}
    </motion.div>
  )
}

export default SkillImage
