import Link from "next/link"
<<<<<<< HEAD
const NavLink = ({ href, linkName, sectionInView }) => {
  console.log(sectionInView)
  const inViewBackgournd =
    "  text-transparent from-[#BED250] bg-clip-text to-[#109C81]  bg-gradient-to-r"
  const hoverBackground =
    "hover:from-[#BED250] hover:bg-clip-text hover:to-[#109C81] hover:bg-gradient-to-r"
=======
const NavLink = ({ href, linkName }) => {
>>>>>>> parent of 3a3f531 (fixing)
  return (
    <li>
      <Link
        href={href}
<<<<<<< HEAD
        className={`block py-2 ${
          sectionInView ? inViewBackgournd : "text-[#ADB7BE]"
        } pl-3 pr-4  sm:text-lg rounded md:p-0 hover:text-transparent  ${hoverBackground} hover:bg-gradient-to-r  `}
=======
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#BED250] hover:to-[#109C81] "
>>>>>>> parent of 3a3f531 (fixing)
      >
        {linkName}
      </Link>
    </li>
  )
}

export default NavLink
