import Image from "next/image"
import ProjectLinks from "./ProjectLink"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const ProjectCard = ({ imgUrl, title, descreption, links }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
 
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="group flex h-full flex-col items-center mx-4 justify-center cursor-pointer w-full">
        <div className="relative ">
          <Image
            src={imgUrl}
            width={500}
            height={500}
            className="rounded-xl object-cover"
            sizes="(min-width: 680px) 500px, calc(93.33vw - 116px)"
            alt={title}
          />
          <div className="absolute hidden top-0 md:flex justify-center gap-4 p-4 items-center left-0 bg-[#181818] h-full w-full opacity-0 group-hover:flex group-hover:opacity-80 transition-all duration-500 cursor-pointer">
            <div className="text-white bg-[#181818] -translate-y-[100%] group-hover:translate-y-0 duration-500 transition max-w-96">
              <h5 className="text-xl font-semibold mb-2">{title}</h5>
              <p className="text-[#ADB7BE]">{descreption}</p>
            </div>
            <ProjectLinks links={links} />
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ProjectCard
