import Image from "next/image"
import Link from "next/link"
import { FaCode } from "react-icons/fa6"
import { IoMdEye } from "react-icons/io"

const ProjectCard = ({ imgUrl, title, discreption, links }) => {
  return (
    <div className="group flex flex-col items-center justify-center cursor-pointer ">
      <div className="relative">
        <Image
          src={imgUrl}
          width={500}
          height={500}
          className="rounded-xl w-full object-cover"
          alt={title}
        />m,
        <div className=" absolute top-0 flex justify-center items-center left-0 bg-[#181818] h-full w-full opacity-0  group-hover:flex group-hover:opacity-80 transition-all duration-500 cursor-pointer">
          <div className="text-white p-4 rounded-b-xl bg-[#181818] flex-grow">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE] flex-grow">{discreption}</p>
          </div>
          <div className="flex items-center justify-center w-full space-x-8">
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
      </div>
    </div>
  )
}

export default ProjectCard
