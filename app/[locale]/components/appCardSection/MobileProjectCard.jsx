import React from "react"
import Image from "next/image"
import ProjectLinks from "./ProjectLink"
import Reveal from "../Layout/RevealAnimation/Reveal"
const MobileProjectCard = ({ projectInfo }) => {
  const { title, description, image, links, tags } = projectInfo;
  return (
    <Reveal>
      <div className="group mb-3 px-4">
        <section className="group w-full h-full cursor-pointer">
          <div className="relative w-full h-full">
            <Image
              src={image}
              width={500}
              height={500}
              className="rounded-xl object-cover"
              sizes="(min-width: 680px) 500px, calc(93.33vw - 116px)"
              alt={title}
            />
            <div className="absolute gap-3 top-0 flex flex-col justify-center p-4 items-center left-0 bg-[#181818] h-full w-full opacity-0 group-hover:flex group-hover:opacity-80 transition-all duration-500 cursor-pointer">
              {/* Title */}
              <div className="bg-[#181818] -translate-y-[100%] group-hover:translate-y-0 duration-500 transition max-w-96">
                <h5 className="text-xl font-semibold mb-2 text-[#BED250]">
                  {title}
                </h5>
              </div>

              {/* Project Links */}
              <ProjectLinks links={links} />

              {/* Tags (Tech Stack) */}
              <ul className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                {tags.map((tag, index) => (
                  <li
                    className="bg-[#BED250] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Reveal>
  );
};

export default MobileProjectCard