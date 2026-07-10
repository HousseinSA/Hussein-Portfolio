"use client"
import React from "react"
import SkillImage from "./SkillImage"
import { useTechImages } from "../../../../utils/projectcontent"
import { useTranslations, useLocale } from "next-intl"
import Reveal from "../../Layout/RevealAnimation/Reveal"
import TitleAnimation from "../../Layout/RevealAnimation/TitleAnimation"
import SectionTitle from "../../Layout/SectionTitle"
import { FaCode, FaServer, FaMobile, FaCube, FaTools } from "react-icons/fa"
import { motion } from "framer-motion"

const SkillsComponent = () => {
  const skills = useTranslations("Skills-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  const { frontEndSkills, backendSkills, mobileSkills, cmsSkills, devopsSkills } =
    useTechImages()

  const CategorySection = ({ icon: Icon, title, skills, color }) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full flex flex-col items-center gap-2 sm:gap-4 md:gap-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 sm:gap-3 justify-center"
      >
        <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-2">
          <Icon className="text-2xl sm:text-3xl" style={{ color }} />
        </motion.div>
        <h2
          className="text-lg sm:text-2xl font-bold uppercase tracking-widest"
          style={{ color }}
        >
          {title}
        </h2>
      </motion.div>

      <motion.div
        className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap items-center w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {skills?.map(({ tool, img }, skillIndex) => (
          <motion.div
            key={skillIndex}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                },
              },
            }}
          >
            <SkillImage
              index={skillIndex}
              img={img}
              tool={tool}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )

  const categories = [
    {
      icon: FaCode,
      title: "Frontend",
      skills: frontEndSkills,
      color: "#BED250",
    },
    {
      icon: FaServer,
      title: "Backend",
      skills: backendSkills,
      color: "#FF6B9D",
    },
    {
      icon: FaMobile,
      title: "Mobile",
      skills: mobileSkills,
      color: "#00D9FF",
    },
    {
      icon: FaCube,
      title: "CMS",
      skills: cmsSkills,
      color: "#FFB800",
    },
    {
      icon: FaTools,
      title: "DevOps & Tools",
      skills: devopsSkills,
      color: "#9D4EDD",
    },
  ]

  return (
    <Reveal>
      <section>
        <div className="flex flex-col justify-center gap-8 sm:gap-12 md:gap-20">
          <TitleAnimation>
            <SectionTitle title={skills("title")} />
          </TitleAnimation>

          <div id="skills" className="flex flex-col justify-center items-center gap-6 sm:gap-10 md:gap-14 w-full">
            {categories.map((category, index) => (
              <CategorySection
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default SkillsComponent
