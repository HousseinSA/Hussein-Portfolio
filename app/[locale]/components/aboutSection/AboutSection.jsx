"use client"
import LottieImage from "./lottieImages/LottieImage"
import React from "react"
import { useTranslations } from "next-intl"
import Reveal from "../Layout/RevealAnimation/Reveal"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"
import SectionTitle from "../Layout/SectionTitle"
import AnimatedText from "./AnimatedText"
import { motion } from "framer-motion"

const AboutSection = () => {
  const about = useTranslations("About-Section")

  return (
    <Reveal>
      <section id="about" className="section">
        <style>{`
          @keyframes blob {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            34% { border-radius: 70% 30% 46% 54% / 30% 30% 35% 70%; }
            67% { border-radius: 100% 60% 52% 37% / 72% 44% 56% 28%; }
          }
        `}</style>
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center gap-element-gap md:gap-heading-gap lg:gap-16 items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative shadow-2xl overflow-hidden flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                animation: "blob 7s infinite",
                boxShadow:
                  "0 0 40px rgba(190, 210, 80, 0.4), 0 0 80px rgba(16, 156, 129, 0.2)",
              }}
            >
              {/* Gradient border blob */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#BED250] via-[#109C81] to-cyan-500"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              />
              <div
                className="absolute inset-1 bg-[#0f172a] flex items-center justify-center"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                <LottieImage />
              </div>
            </motion.div>
          </motion.div>
          <div className="w-full lg:flex-1 flex flex-col justify-start gap-heading-gap items-center lg:items-start text-center lg:text-left">
            <TitleAnimation>
              <SectionTitle title={about("title")} />
            </TitleAnimation>
            <div className="max-w-2xl">
              <AnimatedText text={about("description")} />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default AboutSection
