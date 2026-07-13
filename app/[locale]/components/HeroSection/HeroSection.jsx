"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useLocale, useTranslations } from "next-intl"
import Reveal from "../Layout/RevealAnimation/Reveal"
import AnimatedBackground from "./AnimatedBackground"

const HeroSection = () => {
  const hero = useTranslations("Hero-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  const resumeLink =
    "https://drive.google.com/file/d/1KxX2XyHh7AUXO0rEk-U3w2Z7Z0XrrBYr/view?usp=drive_link"

  const handleMail = () => {
    window.location.href = "mailto:husseinsedoum@gmail.com"
  }

  return (
    <Reveal>
      <section className="relative overflow-hidden min-h-[calc(100vh-80px)] sm:min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-12">
        <style>{`
          @keyframes blob {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            34% { border-radius: 70% 30% 46% 54% / 30% 30% 35% 70%; }
            67% { border-radius: 100% 60% 52% 37% / 72% 44% 56% 28%; }
          }
          .blob-container {
            backface-visibility: hidden;
            perspective: 1000px;
            transform: translateZ(0);
          }
        `}</style>
        <div className="flex relative gap-8 sm:gap-12 md:gap-20 lg:gap-32 items-center justify-center z-10 px-4 sm:px-6 md:px-10 w-full flex-col md:flex-row max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`px-2 sm:px-4 w-full md:w-auto md:max-w-md lg:max-w-lg text-center md:text-left ${
              isArabic ? "md:text-right" : ""
            }`}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 md:mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r text-right from-[#BED250] to-[#109C81] py-2 inline-block">
                {hero("hello")}
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block whitespace-nowrap"
              >
                <TypeAnimation
                  sequence={[
                    hero("name"),
                    1000,
                    hero("work"),
                    1000,
                    hero("work2"),
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#adb7be] text-dir mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg"
            >
              {hero("aboutme")}
            </motion.p>

            {/* CTA Buttons - Scale & fade */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="z-20 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-fit"
            >
              <motion.button
                onClick={handleMail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-br from-[#BED250] to-[#109C81] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow text-xs sm:text-sm md:text-base"
                aria-label={hero("hire")}
              >
                {hero("hire")}
              </motion.button>
              <Link
                href={resumeLink}
                target="_blank"
                className="w-full sm:w-fit"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-1 py-1 w-full rounded-full bg-transparent bg-gradient-to-br from-[#BED250] via-[#109C81] to-cyan-500 font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="block bg-[#181818] hover:bg-slate-800 text-white rounded-full py-2 px-3 sm:px-5 transition-colors text-xs sm:text-sm md:text-base">
                    {hero("download")}
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-4 sm:mt-6 md:mt-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="blob-container relative shadow-2xl overflow-hidden flex-shrink-0 w-full h-full"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                animation: "blob 7s infinite",
                boxShadow:
                  "0 0 40px rgba(190, 210, 80, 0.4), 0 0 80px rgba(16, 156, 129, 0.2)",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#BED250] via-[#109C81] to-cyan-500"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              />
              <div
                className="absolute inset-1 bg-[#0f172a]"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                <Image
                  src="/Hussein.png"
                  alt="personal"
                  fill
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  className="object-cover"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <AnimatedBackground />
      </section>
    </Reveal>
  )
}

export default HeroSection
