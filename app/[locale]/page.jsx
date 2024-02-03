"use client"
import HeroSection from "./components/HeroSection/HeroSection"
import NavBar from "./components/Layout/headerSection/HeaderSection"
import AboutSection from "./components/aboutSection/AboutSection"
import ProjectSection from "./components/projectSection/projectSection"
import ContactSection from "./components/ContactSection/ContactSection"
// import AOS from "aos"
// import "aos/dist/aos.css"
import { useEffect } from "react"
import SkillsComponent from "./components/SkillsSection/Skills"
const Home = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 500,
  //     easing: "ease-in-out",
  //     Infinity: true,
  //     anchorPlacement: "top-bottom",
  //     threshold: 0.5,
  //   })
  // }, [])

  return (
    <main>
      <NavBar />
      <div className="mx-auto py-2 px-8 md:py-4 md:px-12">
        <HeroSection />
        <SkillsComponent />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  )
}
export default Home
