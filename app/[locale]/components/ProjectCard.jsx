// ProjectCard.jsx
import Image from "next/image"
import Link from "next/link"
import { FaCode } from "react-icons/fa6"
import { IoMdEye } from "react-icons/io"

const ProjectCard = ({ imgUrl, title, discreption, links }) => {
  return (
    <div className="group flex h-full flex-col items-center mx-4 justify-center cursor-pointer w-full">
      <div className="relative">
        <Image
          src={imgUrl}
          width={800}
          height={800}
          className="rounded-xl w-full object-cover"
          alt={title}
        />
        <div className="absolute hidden  top-0 md:flex justify-center gap-4 p-4 items-center left-0 bg-[#181818] h-full w-full opacity-0 group-hover:flex group-hover:opacity-80 transition-all duration-500 cursor-pointer">
          <div className="text-white rounded-b-xl bg-[#181818] -translate-y-[100%] group-hover:translate-y-0 duration-500 transition max-w-96">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{discreption}</p>
          </div>
          <div className="flex items-center gap-4 translate-y-[100%] group-hover:translate-y-0 duration-500 transition">
            <Link
              href={links[1]}
              target="_blank"
              className="group/link hover:scale-125 transition duration-300"
            >
              <FaCode className="w-10 h-10 text-[#ADB7BE] p-2 rounded-full border-2 border-[#ADB7BE] relative group-hover/link:border-[#BED250] group-hover/link:text-[#BED250]" />
            </Link>
            <Link
              href={links[0]}
              target="_blank"
              className="group/link hover:scale-125 transition duration-300"
            >
              <IoMdEye className="w-10 h-10 p-2 text-[#ADB7BE] rounded-full border-2 border-[#ADB7BE]  group-hover/link:border-[#BED250] group-hover/link:text-[#BED250]" />
            </Link>
          </div>
        </div>
        <div className="mt-5 flex md:hidden flex-col text-white justify-center items-center">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{discreption}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
