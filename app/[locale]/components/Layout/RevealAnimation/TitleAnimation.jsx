import { motion } from "framer-motion"

const TitleAnimation = ({ children }) => {
  const titleVariants = {
    initial: { opacity: 0, y: 5, scale: 0.5 },
    animate: { opacity: 1, y: 0, scale: 1 },
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
