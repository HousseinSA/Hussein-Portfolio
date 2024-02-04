"use client"
import HeroSection from "./components/HeroSection/HeroSection"
import NavBar from "./components/Layout/headerSection/HeaderSection"
import AboutSection from "./components/aboutSection/AboutSection"
import ProjectSection from "./components/projectSection/projectSection"
import ContactSection from "./components/ContactSection/ContactSection"
import SkillsComponent from "./components/SkillsSection/Skills"
const Home = () => {

  return (
    <main>
      <NavBar />
      <div className="mx-auto mt-0 sm:mt-10 px-5 md:px-12">
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
