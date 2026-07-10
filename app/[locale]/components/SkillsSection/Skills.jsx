"use client"
import React from "react"
import SkillImage from "./SkillImage"
import { useTechImages } from "../../../utils/projectcontent"
import { useTranslations, useLocale } from "next-intl"
import Reveal from "../Layout/RevealAnimation/Reveal"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"
import SectionTitle from "../Layout/SectionTitle"

const SkillsComponent = () => {
  const skills = useTranslations("Skills-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  const { frontEndSkills, backendSkills, devopsSkills } = useTechImages()

  return (
    <Reveal>
      <section className="section">
        <div className="px-2 sm:px-4 flex flex-col justify-center gap-heading-gap">
          <TitleAnimation>
            <SectionTitle title={skills("title")} />
          </TitleAnimation>
          <div
            id="skills"
            className="flex relative flex-col justify-center items-center gap-element-gap overflow-hidden"
          >
            <div className="flex justify-around gap-3 sm:gap-5 flex-wrap items-center">
              {frontEndSkills?.map(({ tool, img }, index) => {
                return (
                  <SkillImage
                    key={index}
                    index={index}
                    imgLink={img}
                    title={tool}
                  />
                )
              })}
            </div>
            <div className="flex justify-around gap-3 sm:gap-5 flex-wrap items-center">
              {backendSkills?.map(({ tool, img }, index) => {
                return (
                  <SkillImage
                    key={index}
                    index={index}
                    imgLink={img}
                    title={tool}
                  />
                )
              })}
            </div>
            <div className="flex justify-around gap-3 sm:gap-5 flex-wrap items-center">
              {devopsSkills?.map(({ tool, img }, index) => {
                return (
                  <SkillImage
                    key={index}
                    index={index}
                    imgLink={img}
                    title={tool}
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
