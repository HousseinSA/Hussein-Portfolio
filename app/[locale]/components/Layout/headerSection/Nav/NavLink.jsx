import Link from "next/link"
const NavLink = ({ href, linkName, sectionInView }) => {
  const inViewBackgournd =
    "  text-transparent from-[#BED250] bg-clip-text to-[#109C81]  bg-gradient-to-r"
  const hoverBackground =
    "hover:from-[#BED250] hover:bg-clip-text hover:to-[#109C81] hover:bg-gradient-to-r"
  return (
    <li>
      <Link
        href={href}
        className={`block py-2 ${
          sectionInView ? inViewBackgournd : "text-[#ADB7BE]"
        } pl-3 pr-4  sm:text-lg rounded md:p-0 hover:text-transparent  ${hoverBackground} hover:bg-gradient-to-r  `}
      >
        {linkName}
      </Link>
    </li>
  )
}

export default NavLink
