import React from "react"
import ProjectCard from "./ProjectCard"

import useProjectContent from "../../../utils/projectcontent"
const ProjectSlider = () => {
  const { projects } = useProjectContent()
  return (
    <section
      id="work"
      data-aos="zoom-in-up"
      className="p-10 min-h-screen mx-auto flex flex-wrap pt-20 px-5 lg:px-10 items-center justify-center"
    >
      {projects.map(({ id, title, discreption, Image, links }) => (
        <ProjectCard
          key={id}
          imgUrl={Image}
          title={title}
          discreption={discreption}
          links={links}
        />
      ))}
    </section>
  )
}

export default ProjectSlider
