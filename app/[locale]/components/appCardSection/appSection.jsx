"use client"
import React from "react"
import MobileProjectCard from "./MobileProjectCard"
import BigScreenProjectCard from "./BigScreenProjectCard"
import { useState, useEffect } from "react"
import { useLocale, useTranslations } from "next-intl"
import { useProjectContent } from "../../../utils/projectcontent"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"
import SectionTitle from "../Layout/SectionTitle"

export const AppSection = () => {
  const { projects } = useProjectContent()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)")
    setIsMobile(mediaQuery.matches)

    const handleChange = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const work = useTranslations("Projects-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <section
      id="work"
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 sm:py-12 md:py-24"
      style={{
        background: "linear-gradient(180deg, rgba(31, 26, 56, 0.5) 0%, rgba(26, 42, 58, 0.7) 50%, rgba(31, 26, 56, 0.5) 100%)",
        backdropFilter: "blur(8px)"
      }}
    >
      <div className="flex flex-col gap-heading-gap px-4 md:px-8 max-w-6xl mx-auto w-full">
        <TitleAnimation>
          <SectionTitle title={work("title")} />
        </TitleAnimation>
        <div className="flex flex-col justify-center gap-project-gap w-full">
          {projects.map((projectInfo, index) =>
            isMobile ? (
              <div className="w-full" key={projectInfo.id}>
                <MobileProjectCard projectInfo={projectInfo} />
              </div>
            ) : (
              <BigScreenProjectCard
                key={projectInfo.id}
                projectInfo={projectInfo}
                isEven={index % 2 === 1}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
export default AppSection
