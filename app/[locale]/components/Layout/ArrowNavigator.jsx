"use client"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"
const ArrowNavigator = () => {
  const [showArrow, setShowArrow] = useState(false)
  useEffect(() => {
    const handleArrowShow = () => {
      setShowArrow(window.scrollY >= 400)
    }

    window.addEventListener("scroll", handleArrowShow)
    return () => window.removeEventListener("scroll", handleArrowShow)
  }, [])
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    })
  }
  return (
    <div
      className={`fixed md:bottom-10 bottom-5 ${
        showArrow ? "opacity-100" : "opacity-0"
      } transition duration-300 w-auto h-auto z-50 md:right-10 right-5`}
      onClick={handleScrollToTop}
    >
      <div
        className={`rounded-full cursor-pointer p-3 md:p-5  text-white text-xl hover:bg-[#BED250] active:scale-95 hover:scale-110 bg-[#BED250]/25`}
      >
        <FaArrowUp className="text-base md:text-xl" color="white" />
      </div>
    </div>
  )
}

export default ArrowNavigator
