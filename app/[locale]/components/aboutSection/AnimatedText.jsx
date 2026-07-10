"use client"
import { motion } from "framer-motion"

const AnimatedText = ({ text }) => {
  const sentences = text.split("\n").filter(Boolean)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="text-base md:text-lg leading-relaxed text-white"
    >
      {sentences.map((sentence, idx) => {
        const parts = sentence.split(/(\*\*[^*]*?\*\*)/g).filter(Boolean)

        return (
          <motion.span key={idx} variants={lineVariants} className="block">
            {parts.map((part, partIdx) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <span key={partIdx} className="font-bold text-[#BED250]">
                    {part.slice(2, -2)}
                  </span>
                )
              }
              return <span key={partIdx}>{part}</span>
            })}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

export default AnimatedText
