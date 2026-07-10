import React from "react"
import Image from "next/image"
import ProjectLinks from "./ProjectLink"
import Reveal from "../Layout/RevealAnimation/Reveal"
import { motion } from "framer-motion"

const MobileProjectCard = ({ projectInfo }) => {
  const { title, description, image, links, tags } = projectInfo

  return (
    <Reveal>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="flex flex-col gap-element-gap min-h-[380px] sm:min-h-[400px]">
          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src={image}
              width={600}
              height={600}
              className="rounded-xl object-cover w-full h-auto"
              sizes="(min-width: 680px) 600px, calc(100vw - 32px)"
              alt={title}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-element-gap px-4 justify-between flex-1"
          >
            <div className="flex flex-col gap-element-gap">
              <h3 className="text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#BED250] to-[#109C81] py-2 tracking-tight">
                {title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                {description}
              </p>
            </div>
            <div>
              <ProjectLinks links={links} isPrivateRepo={projectInfo.isPrivateRepo} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default MobileProjectCard
