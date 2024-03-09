"use client"
import React from "react"
import SkillImage from "./SkillImage"
import { useTechImages } from "../../../../utils/projectcontent"
import { useTranslations, useLocale } from "next-intl"
import Reveal from "../../Layout/RevealAnimation/Reveal"
import TitleAnimation from "../../Layout/RevealAnimation/TitleAnimation"
const SkillsComponent = () => {
  const skills = useTranslations("Skills-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  const { frontEndSkills, backendSkills, tools } = useTechImages()
  return (
    <Reveal>
      <section className="section">
        <div
          className={`mt-4 md:mt-0 px-4 ${
            isArabic ? "text-right" : "text-left"
          } flex flex-col justify-center`}
        >
          <TitleAnimation>
            <h1
              className={`title text-center ${
                isArabic ? "lg:text-right" : "lg:text-left"
              } font-bold text-[#BED250] mb-4`}
            >
              {skills("title")}
            </h1>
          </TitleAnimation>
          <div
            id="skills"
            style={{ transform: "scale(0.9)" }}
            className="flex relative flex-col justify-center items-center gap-3 h-full overflow-hidden"
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
        </div>
      </section>
    </Reveal>
  )
}

export default SkillsComponent
