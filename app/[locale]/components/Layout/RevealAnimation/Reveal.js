"use client"
import React from "react"
import { motion } from "framer-motion"
import { useRef } from "react"

const Reveal = ({ children }) => {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group mt-12 md:mt-20 last:mt-0"
    >
      {children}
    </motion.div>
  )
}

export default Reveal
