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
console.log(tools)
  return (
    <Reveal>
      <section>
        <div
          className={`${
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
            className="flex relative flex-col justify-center items-center gap-5 h-full overflow-hidden"
          >
            <div className="flex justify-around gap-5 flex-wrap items-center">
              {frontEndSkills?.map(({ tool, img }, index) => {
                return (
                  <SkillImage key={index} index={index} img={img} tool={tool} />
                )
              })}
            </div>
            <div className="flex justify-around gap-5 flex-wrap items-center">
              {backendSkills?.map(({ tool, img }, index) => {
                return (
                  <SkillImage key={index} index={index} img={img} tool={tool} />
                )
              })}
            </div>
            <div className="flex justify-around gap-5 flex-wrap items-center">
              {tools?.map(({ tool, img }, index) => {
                return (
                  <SkillImage key={index} index={index} img={img} tool={tool} />
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
