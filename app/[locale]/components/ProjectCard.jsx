import Image from "next/image"
import Link from "next/link"
import { FaCode } from "react-icons/fa6"
import { IoMdEye } from "react-icons/io"

const ProjectCard = ({ imgUrl, title, discreption, links }) => {
  return (
    <div className=" group flex flex-col cursor-pointer hover:shadow-[#BED250] hover:shadow-xl hover:-translate-y-1 translate-y-0 overflow-hidden transition duration-700">
      <div className="relative">
        <Image
          src={imgUrl}
          width={500}
          className="rounded-t-xl w-full"
          height={500}
          alt={title}
        />
        <div className=" absolute top-0 left-0 bg-[#181818] h-full w-full opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500 cursor-pointer">
          <div className="flex items-center justify-center w-full space-x-8">
            <Link href={links[1]} target="_blank" className="group/link">
              <FaCode className="w-10 h-10 text-[#ADB7BE] p-2 rounded-full border-2 border-[#ADB7BE] relative group-hover/link:border-[#BED250] group-hover/link:text-[#BED250]" />
            </Link>
            <Link href={links[0]} target="_blank" className="group/link">
              <IoMdEye className="w-10 h-10 p-2 text-[#ADB7BE] rounded-full border-2 border-[#ADB7BE]  group-hover/link:border-[#BED250] group-hover/link:text-[#BED250]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white p-4 rounded-b-xl bg-[#181818] flex-grow">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] flex-grow">{discreption}</p>
      </div>
    </div>
  )
}

export default ProjectCard
