import HeroSection from "./components/HeroSection/HeroSection"
import HeaderSection from "./components/Layout/headerSection/HeaderSection"
import AboutSection from "./components/aboutSection/AboutSection"
import ContactSection from "./components/ContactSection/ContactSection"
import AppSection from "./components/appCardSection/appSection"
import SkillsComponent from "./components/aboutSection/SkillsSection/Skills"
const Home = () => {
  return (
    <main className="pt-20">
      <HeaderSection />
      <div className="mx-auto px-5 md:px-12">
        <div className="mt-6 sm:mt-5">
          <HeroSection />
        </div>
        <div className="mt-section-gap">
          <SkillsComponent />
        </div>
        <div className="mt-section-gap">
          <AboutSection />
        </div>
        <div className="mt-section-gap">
          <AppSection />
        </div>
        <div className="mt-section-gap">
          <ContactSection />
        </div>
      </div>
    </main>
  )
}
export default Home
