"use client"

import { motion } from "framer-motion"
import { GrGithub } from "react-icons/gr"
import { SiExpress } from "react-icons/si"
import Image from "next/image"
import { useState } from "react"

const SkillImage = ({ index, img, tool }) => {
  const [isHovered, setIsHovered] = useState(false)
  const iconSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 45 : window.innerWidth < 1024 ? 55 : 70

  const ImageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }

  let toolIcon
  if (tool === "Github") {
    toolIcon = <GrGithub size={iconSize} color="white" />
  } else if (tool === "express") {
    toolIcon = <SiExpress size={iconSize} color="white" />
  } else {
    toolIcon = <Image src={img && img} alt={tool} width={iconSize} height={iconSize} />
  }

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        variants={ImageVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: index * 0.15 }}
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-white cursor-pointer relative z-10"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#BED250] to-[#00D9FF] blur-xl opacity-0"
          animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ transform: "scale(1.5)" }}
        />
        {toolIcon}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        animate={
          isHovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: -10, scale: 0.8 }
        }
        transition={{ duration: 0.2 }}
        className="absolute -bottom-12 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap z-20 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #BED250 0%, #a8c941 100%)",
          color: "#000",
          boxShadow: "0 8px 24px rgba(190, 210, 80, 0.4)",
        }}
      >
        {tool}
      </motion.div>
    </div>
  )
}

export default SkillImage
