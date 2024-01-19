"use client"
import { useLocale, useTranslations } from "next-intl"
import useProjectContent from "../../utils/projectcontent"
import ProjectCard from "./ProjectCard"
const ProjectSection = () => {
  const Projects = useTranslations("Projects-Section")
  const { projects } = useProjectContent()
  const locale = useLocale()
  const isArabic = locale === "ar"
  return (
    // i fuckign don't know what the fucking is going here
    <section id="work" data-aos="zoom-in-up" className="lg:py-10 h-screen">
      <h1
        className={`text-4xl ${
          isArabic ? "md:text-right" : "md:text-left"
        } font-bold text-[#BED250] mb-4 text-center`}
      >
        {Projects("title")}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-10  gap-8 lg:gap-12">
        {projects.map(({ id, title, discreption, Image, links }) => {
          return (
            <ProjectCard
              imgUrl={Image}
              key={id}
              title={title}
              discreption={discreption}
              links={links}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProjectSection
