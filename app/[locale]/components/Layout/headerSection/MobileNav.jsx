"use client"
import NavLink from "./Nav/NavLink"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
const MobileNav = ({ onClose }) => {
  const navbar = useTranslations("Navbar")
  const navLinks = [
    { href: "#about", linkname: navbar("about") },
    { href: "#work", linkname: navbar("work") },
    { href: "#contact", linkname: navbar("contact") },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  return (
    <>
      <div
        className="fixed inset-0 z-10 md:hidden"
        onClick={onClose}
      />
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="font-semibold h-auto w-full block md:hidden md:w-auto relative z-20"
        id="navbar"
      >
        <ul className="flex flex-col font-semibold py-4 justify-center items-center w-full">
          {navLinks.map(({ href, linkname }, index) => (
            <motion.li key={index} variants={itemVariants}>
              <NavLink href={href} linkName={linkname} />
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <LanguageSwitcher />
          </motion.li>
        </ul>
      </motion.nav>
    </>
  )
}

export default MobileNav
