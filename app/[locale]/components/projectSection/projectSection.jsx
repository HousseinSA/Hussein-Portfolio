import React from "react"
import MobileProjectCard from "./MobileProjectCard"
import BigScreenProjectCard from "./BigScreenProjectCard"
import { useState, useEffect } from "react"
import { useProjectContent } from "../../../utils/projectcontent"
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
  return (
    <section
      id="work"
      // data-aos="zoom-in-up"
      className="p-10  mx-auto flex flex-wrap gap-5 pt-20 px-5 lg:px-10 items-center justify-center"
    >
      {projects.map(({ id, title, descreption, Image, links, tags }) => (
        <div key={id}>
          {isMobile ? (
            <MobileProjectCard
              key={id}
              imgUrl={Image}
              title={title}
              descreption={descreption}
              links={links}
            />
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
        </div>
      ))}
    </section>
  )
}

export default ProjectSlider
