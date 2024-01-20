"use client"
import useProjectContent from "../../utils/projectcontent"
import ProjectCard from "./ProjectCard"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules"
const ProjectSection = () => {
  const { projects } = useProjectContent()
  return (
    <section
      id="work"
      data-aos="zoom-in-up"
      className="p-10 h-screen flex justify-center items-center "
    >
      <div className="flex flex-wrap items-center w-[800px] h-[800px] justify-center mb-10 gap-8 lg:gap-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{ delay: 50, disableOnInteraction: false }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projects.map(({ id, title, discreption, Image, links }) => {
            return (
              <>
                <SwiperSlide key={id}>
                  <ProjectCard
                    imgUrl={Image}
                    title={title}
                    discreption={discreption}
                    links={links}
                  />
                </SwiperSlide>
              </>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default ProjectSection
