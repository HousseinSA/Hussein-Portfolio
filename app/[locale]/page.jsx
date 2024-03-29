import HeroSection from "./components/HeroSection/HeroSection"
import HeaderSection from "./components/Layout/headerSection/HeaderSection"
import AboutSection from "./components/aboutSection/AboutSection"
import ContactSection from "./components/ContactSection/ContactSection"
import AppSection from "./components/appCardSection/appSection"
const Home = () => {
  return (
    <main>
      <HeaderSection />
      <div className="mx-auto mt-14 sm:mt-5 px-5 md:px-12">
        <HeroSection />
        <AboutSection />
        <AppSection />
        <ContactSection />
      </div>
    </main>
  )
}
export default Home
