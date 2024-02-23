import React from "react"
import Image from "next/image"
import ProjectLinks from "./ProjectLink"
import Reveal from "../Layout/RevealAnimation/Reveal"
export default function BigScreenProjectCard({
  title,
  description,
  tags,
  imageUrl,
  links,
}) {
  return (
    <Reveal>
      <section className="bg-gray-100 max-w-[42rem] cursor-pointer border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 px-2 text-black ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl text-[#BED250] font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap  mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          width={400}
          height={600}
          sizes="452px"
          className="absolute h-auto w-auto hidden sm:block top-8 -right-40  rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"
        />
        <div className="absolute z-10 transition duration-300 bg-black/10 opacity-0 group-hover:opacity-100  top-0 right-0 left-0 h-full w-full ">
          <div className="flex w-full h-full items-center justify-center gap-2">
            <ProjectLinks links={links} color={true} />
          </div>
        </div>
      </section>
    </Reveal>
  )
}
