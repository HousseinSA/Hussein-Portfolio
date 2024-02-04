import Image from "next/image"
import ProjectLinks from "./ProjectLink"
import Reveal from "../Layout/RevealAnimation/Reveal"
const MobileProjectCard = ({ imgUrl, title, descreption, links }) => {
  return (
    <Reveal>
      <div className="group mb-3 px-4">
        <section className="group w-full  h-full  cursor-pointer">
          <div className="relative w-full h-full">
            <Image
              src={imgUrl}
              width={500}
              height={500}
              className="rounded-xl object-cover "
              sizes="(min-width: 680px) 500px, calc(93.33vw - 116px)"
              alt={title}
            />
            <div className="absolute hidden top-0 md:flex justify-center gap-4 p-4 items-center left-0 bg-[#181818] h-full w-full opacity-0 group-hover:flex group-hover:opacity-80 transition-all duration-500 cursor-pointer">
              <div className=" bg-[#181818] -translate-y-[100%] group-hover:translate-y-0 duration-500 transition max-w-96">
                <h5 className="text-xl font-semibold mb-2 text-[#BED250] ">
                  {title}
                </h5>
                <p className="text-[#ADB7BE]">{descreption}</p>
              </div>
              <ProjectLinks links={links} />
            </div>
          </div>
        </section>
      </div>
    </Reveal>
  )
}

export default MobileProjectCard
