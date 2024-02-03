"use client"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

const Reveal = ({ children }) => {
  const elementRef = useRef(null)
  const controls = useAnimation()
  const sliderControls = useAnimation()
  const inView = useInView(elementRef, {
    // once: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
      sliderControls.start("visible")
    }
  }, [inView, controls, sliderControls])

  return (
    <motion.div className="relative ">
      <motion.div
        ref={elementRef}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className=" overflow-hidden"
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={sliderControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute inset-0 z-20 bg-green-700"
      ></motion.div>
    </motion.div>
  )
}

export default Reveal
