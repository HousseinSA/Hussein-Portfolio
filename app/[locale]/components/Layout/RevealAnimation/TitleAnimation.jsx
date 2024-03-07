"use client"

import { motion } from "framer-motion"

const TitleAnimation = ({ children }) => {
  const titleVariants = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: "-100%" },
  }
  return (
    <motion.div
      variants={titleVariants}
      initial={"initial"}
      whileInView={"animate"}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  )
}

export default TitleAnimation
