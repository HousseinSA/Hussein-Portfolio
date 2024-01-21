import React from "react"
import Slider from "react-slick"
import ProjectCard from "./ProjectCard"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useProjectContent from "../../utils/projectcontent"
const ProjectSlider = () => {
  const { projects } = useProjectContent()
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800, // Adjust the speed for smoother sliding
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    cssEase: "linear", // Use linear easing for smoother sliding
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  }

  return (
    <section
      id="work"
      data-aos="zoom-in-up"
      className="p-10 h-screen mx-auto flex items-center justify-center"
    >
      <Slider {...sliderSettings} className="w-full">
        {projects.map(({ id, title, discreption, Image, links }) => (
          <ProjectCard
            key={id}
            imgUrl={Image}
            title={title}
            discreption={discreption}
            links={links}
          />
        ))}
      </Slider>
    </section>
  )
}

export default ProjectSlider
