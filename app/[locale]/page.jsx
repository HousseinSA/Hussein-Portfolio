"use client"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/projectSection"
import ContactSection from "./components/ContactSection"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage"
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
        <Fullpage>
          <FullPageSections>
            {/* hero */}
            <FullpageSection>
              <HeroSection />
            </FullpageSection>
            {/* about */}
            <FullpageSection>
              <AboutSection />
            </FullpageSection>
            {/* Project */}
            <FullpageSection>
              <ProjectSection />
            </FullpageSection>
            {/* contact */}
            <FullpageSection>
              <ContactSection />
            </FullpageSection>
          </FullPageSections>
        </Fullpage>
      </div>
    </main>
  )
}
export default Home
