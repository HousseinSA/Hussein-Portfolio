"use client"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/projectSection"
import ContactSection from "./components/ContactSection"
import AOS from "aos"
import "aos/dist/aos.css"
import FooterSection from "./components/FooterSection"
import { useEffect } from "react"
import { useLocale } from "next-intl"
import Image from "next/image"
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      Infinity: true,
    })
  }, [])
  const locale = useLocale()
  return (
    <>
      <main
        className={`flex flex-col ${
          locale === "ar" && "text-right"
        } bg-[#121212] min-h-screen`}
      >
        <NavBar />
        <div className="container mt-[95px] mx-auto py-2 px-8 md:py-4 md:px-12">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          <FooterSection />
        </div>
      </main>
    </>
  )
}

export default Home

{
  /* <div className="group rounded-md relative h-[380px] w-[380px] flex flex-col items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow cursor-pointer ">
      <div className="w-full h-full">
        <Image
          src={imgUrl}
          className="h-full w-full  group-hover:rotate-3 group-hover:scale-110 transition-transform duration-500"
          alt={title}
          width={500}
          height={500}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center transform translate-y-[60%] group-hover:translate-y-0 transition-all">
        <h1 className="text-lg md:text-xl font-bold text-white">{title}</h1>
        <p className="text-base md:text-md mb-3 italic text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {discreption}
        </p>
        <div className="flex items-center justify-center w-full space-x-8">
          <Link href={links[1]} target="_blank" className="group/link">
            <FaCode className="w-10 h-10 text-[#ADB7BE] p-2 rounded-full border-2 border-[#ADB7BE] relative group-hover/link:border-[#BED250] group-hover/link:text-[#BED250]" />
          </Link>
          <Link href={links[0]} target="_blank" className="group/link">
            <IoMdEye className="w-10 h-10 p-2 text-[#ADB7BE] rounded-full border-2 border-[#ADB7BE]  group-hover/link:border-[#BED250] group-hover/link:text-[#BED250]" />
          </Link>
        </div>
      </div>
    </div> */
}
