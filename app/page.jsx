"use client"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/projectSection"
import ContactSection from "./components/ContactSection"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      Infinity: true,
    })
  }, [])
  return (
    <main className="flex flex-col bg-[#121212] min-h-screen">
      <NavBar />
      <div className="container mt-[95px] mx-auto py-2 px-8 md:py-4 md:px-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  )
}

export default Home
