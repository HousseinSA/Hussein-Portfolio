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
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage"
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out", // Default easing for AOS animations
      Infinity: true, // Only run once flag
      // Custom easing function (cubic bezier)
      easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      // Anchor placement options
      anchorPlacement: "center-bottom",
      threshold: 0.5,
    })
  }, [])
  return (
    <main className="flex flex-col bg-[#121212]"> 
      <NavBar />
      <div className="container mt-[95px] md:mt-[0px] mx-auto py-2 px-8 md:py-4 md:px-12">
        <Fullpage>
          <FullPageSections>
            <FullpageSection>
              <HeroSection />
            </FullpageSection>
            <FullpageSection>
              <AboutSection />
            </FullpageSection>
            <FullpageSection>
              <ProjectSection />
            </FullpageSection>
            <FullpageSection>
              <ContactSection />
              <FooterSection />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </div>
    </main>
  )
}

export default Home
