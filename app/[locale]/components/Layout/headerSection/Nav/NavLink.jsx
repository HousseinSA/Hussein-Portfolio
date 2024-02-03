import Link from "next/link"
const NavLink = ({ href, linkName, isActive }) => {
  // console.log(isActive)
  return (
    <li>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#BED250] hover:to-[#109C81] "
      >
        {linkName}
      </Link>
    </li>
  )
}

export default NavLink
