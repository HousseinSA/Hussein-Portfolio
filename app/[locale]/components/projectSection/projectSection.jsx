"use client"
import React from "react"
import MobileProjectCard from "./MobileProjectCard"
import BigScreenProjectCard from "./BigScreenProjectCard"
import { useState, useEffect } from "react"
import { useLocale, useTranslations } from "next-intl"
import { useProjectContent } from "../../../utils/projectcontent"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"
import Reveal from "../Layout/RevealAnimation/Reveal"
const ProjectSection = () => {
  const { projects } = useProjectContent()
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }
    handleResize()
    // Add event listener for window resize
    window.addEventListener("resize", handleResize)
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  const work = useTranslations("Projects-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  return (
    <Reveal>
      <section id="work" className="pb-10 sm:px-4 lg:px-10 w-full h-full">
        <TitleAnimation>
          <h1
            className={`text-4xl text-center ${
              isArabic ? "lg:text-right" : "lg:text-left"
            } font-bold text-[#BED250] mb-12`}
          >
            {work("title")}
          </h1>
        </TitleAnimation>
        <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
          {projects.map(({ id, title, descreption, Image, links, tags }) => (
            <div key={id}>
              {isMobile ? (
                <MobileProjectCard  yyy
                  imgUrl={Image}
                  title={title}
                  descreption={descreption}
                  links={links}
                />
              ) : (
                <BigScreenProjectCard
                  title={title}
                  key={title}
                  description={descreption}
                  imageUrl={Image}
                  tags={tags}
                  links={links}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}

export default ProjectSection
