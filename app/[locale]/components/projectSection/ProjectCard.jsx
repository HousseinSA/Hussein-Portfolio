import Image from "next/image"
import ProjectLinks from "./ProjectLink"

const ProjectCard = ({ imgUrl, title, discreption, links }) => {
  return (
    <div className="group flex h-full flex-col items-center mx-4 justify-center cursor-pointer w-full">
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
            <p className="text-[#ADB7BE]">{discreption}</p>
          </div>
          <ProjectLinks links={links} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
