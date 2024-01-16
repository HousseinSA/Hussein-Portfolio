"use client"
import { useTranslations } from "next-intl"
import useProjectContent from "../../utils/content"
import ProjectCard from "./ProjectCard"
const ProjectSection = () => {
  const Projects = useTranslations("Projects-Section")
  const { projects } = useProjectContent()
  return (
    <section id="work" data-aos="fade-up">
      <h1 className="text-4xl md:text-left font-bold text-[#BED250] mb-4 text-center">
        {Projects("title")}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-12">
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
