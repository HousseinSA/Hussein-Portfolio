import HeroSection from "./components/HeroSection/HeroSection"
import HeaderSection from "./components/Layout/headerSection/HeaderSection"
import AboutSection from "./components/aboutSection/AboutSection"
import ContactSection from "./components/ContactSection/ContactSection"
import ProjectSection from "./components/projectSection/ProjectSection"
const Home = () => {
  return (
    <main>
      <HeaderSection />
      <div className="mx-auto mt-0 sm:mt-10 px-5 md:px-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  )
}
export default Home
