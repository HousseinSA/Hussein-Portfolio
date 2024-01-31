"use client"
import HeroSection from "./components/HeroSection/HeroSection"
import NavBar from "./components/Layout/headerSection/NavBar"
import AboutSection from "./components/aboutSection/AboutSection"
import ProjectSection from "./components/projectSection/projectSection"
import ContactSection from "./components/ContactSection/ContactSection"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      Infinity: true,
      anchorPlacement: "top-bottom",
      threshold: 0.5,
    })
  }, [])
  return (
    <main className="bg-[#121212]">
      <NavBar />
      <div className="mx-auto py-2 px-8 md:py-4 md:px-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  )
}
export default Home
