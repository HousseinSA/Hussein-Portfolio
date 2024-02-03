"use client"
import SkillImage from "./SkillImage"
import { useTechImages } from "../../../utils/projectcontent"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import Reveal from "../Layout/RevealAnimation/Reveal"
const SkillsComponent = () => {
  const skills = useTranslations("Skills-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  const { frontEndSkills, backendSkills, tools } = useTechImages()
  const titleAniamtion = {
    initial: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <Reveal>
      <section>
        <motion.div
          className={`mt-4 md:mt-0 px-4 ${
            isArabic ? "text-right" : "text-left"
          } flex flex-col  justify-center`}
        >
          <motion.h1
            variants={titleAniamtion}
            initial=" initial"
            whileInView={"visible"}
            className={`text-4xl text-center ${
              isArabic ? "lg:text-right" : "lg:text-left"
            } font-bold text-[#BED250] mb-4`}
          >
            {skills("title")}
          </motion.h1>
          <div
            id="skills"
            style={{ transform: "scale(0.9)" }}
            className="flex relative flex-col justify-center items-center gap-3 h-full overflow-hidden py-20"
          >
            <div className="flex justify-around gap-5 mt-4 flex-wrap items-center">
              {frontEndSkills?.map(({ language, imgLink }, index) => {
                return (
                  <SkillImage
                    key={index}
                    index={index}
                    imgLink={imgLink}
                    title={language}
                  />
                )
              })}
            </div>
            <div className="flex justify-around gap-5 mt-4 flex-wrap items-center">
              {backendSkills?.map(({ language, imgLink }, index) => {
                return (
                  <SkillImage
                    key={index}
                    index={index}
                    imgLink={imgLink}
                    title={language}
                  />
                )
              })}
            </div>
            <div className="flex justify-around gap-5 mt-4 flex-wrap items-center">
              {tools?.map(({ language, imgLink }, index) => {
                return (
                  <SkillImage
                    key={index}
                    index={index}
                    imgLink={imgLink}
                    title={language}
                  />
                )
              })}
            </div>
          </div>
        </motion.div>
      </section>
    </Reveal>
  )
}

export default SkillsComponent
