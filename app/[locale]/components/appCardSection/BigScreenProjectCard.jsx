import React, { useState } from "react"
import Image from "next/image"
import ProjectLinks from "./ProjectLink"
import Reveal from "../Layout/RevealAnimation/Reveal"
import { motion, AnimatePresence } from "framer-motion"

export default function BigScreenProjectCard({ projectInfo, isEven }) {
  const { title, description, tags, image, links } = projectInfo
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  return (
    <Reveal>
      <motion.section
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className={`flex items-center gap-element-gap md:gap-heading-gap lg:gap-16 w-full max-w-[1400px] mx-auto min-h-[280px] md:min-h-[300px] lg:min-h-[320px] ${
          isEven ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.12, y: -20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex-1 min-w-0"
          style={{ willChange: "transform" }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group bg-gradient-to-br from-[#1a2a3a]/60 to-[#0f172a]/60 p-4 hover:shadow-[0_20px_60px_rgba(190,210,80,0.3)] transition-shadow duration-350">
            <div className="absolute inset-0 bg-gradient-to-r from-[#BED250]/20 via-[#109C81]/20 to-[#BED250]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

            <div className="relative w-full overflow-hidden rounded-xl bg-[#0f172a]">
              <Image
                src={image}
                alt={title}
                quality={95}
                width={1920}
                height={1080}
                className="w-full h-auto block transition-transform duration-500"
                sizes="(min-width: 1200px) 60vw, (min-width: 768px) 55vw, 100vw"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_30px_rgba(190,210,80,0.2)]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-w-0 flex flex-col gap-element-gap justify-between"
          style={{ willChange: "opacity, transform" }}
        >
          <div className="flex flex-col gap-element-gap">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#BED250] to-[#109C81] py-2 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
              {description}
            </p>
          </div>
          <div>
            <ProjectLinks links={links} color={true} isPrivateRepo={projectInfo.isPrivateRepo} />
          </div>
        </motion.div>

      </motion.section>
    </Reveal>
  )
}
