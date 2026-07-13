"use client"
import React, { useMemo } from "react"
import { motion } from "framer-motion"

const AnimatedBackground = () => {
  const particles = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      left: (i * 16.67) % 100,
      top: (i * 15) % 100,
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 top-0 left-0 right-0">
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#BED250]/10 to-[#109C81]/10 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#109C81]/10 to-cyan-500/10 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#BED250]/5 to-purple-500/5 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#BED250"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -300, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + particle.id * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.3,
          }}
          className="absolute w-1 h-1 bg-[#BED250] rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
