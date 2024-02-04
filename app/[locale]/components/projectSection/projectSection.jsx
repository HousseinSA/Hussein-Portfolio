import React from "react"
import MobileProjectCard from "./MobileProjectCard"
import BigScreenProjectCard from "./BigScreenProjectCard"
import { useState, useEffect } from "react"
import { useLocale, useTranslations } from "next-intl"
import { useProjectContent } from "../../../utils/projectcontent"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"
const ProjectSlider = () => {
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
    <section id="work" className="h-full w-full py-10 sm:px-4 lg:px-10">
      <TitleAnimation>
        <h1
          className={`text-4xl text-center ${
            isArabic ? "lg:text-right" : "lg:text-left"
          } font-bold text-[#BED250] mb-12`}
        >
          {work("title")}
        </h1>
      </TitleAnimation>
      <div className="flex flex-col justify-center items-center gap-5 w-full h-full  ">
        {projects.map(({ id, title, descreption, Image, links, tags }) => (
          <>
            {isMobile ? (
              <div className="w-full" key={id}>
                <MobileProjectCard
                  imgUrl={Image}
                  title={title}
                  descreption={descreption}
                  links={links}
                />
              </div>
            ) : (
              <BigScreenProjectCard
                title={title}
                key={id}
                description={descreption}
                imageUrl={Image}
                tags={tags}
                links={links}
              />
            )}
          </>
        ))}
      </div>
    </section>
  )
}

export default ProjectSlider
