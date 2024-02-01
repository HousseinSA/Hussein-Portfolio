import { FaCode } from "react-icons/fa6"
import { IoMdEye } from "react-icons/io"
import Link from "next/link"
const ProjectLinks = ({ links }) => {
  const linkStyle =
    "w-10 h-10  text-[#ADB7BE] p-2 rounded-full border-2 border-[#ADB7BE] relative group-hover/link:border-[#BED250] group-hover/link:text-[#BED250]"
  return (
    <div className="flex items-center gap-4 translate-y-[100%] group-hover:translate-y-0 duration-500 transition">
      <Link
        href={links[1]}
        target="_blank"
        className="group/link hover:scale-125 active:scale-100 transition duration-300 "
      >
        <FaCode className={linkStyle} />
      </Link>
      <Link
        href={links[0]}
        target="_blank"
        className="group/link hover:scale-125 active:scale-100 transition duration-300 "
      >
        <IoMdEye className={linkStyle} />
      </Link>
    </div>
  )
}

export default ProjectLinks
