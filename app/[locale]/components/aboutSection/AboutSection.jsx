// import LottieImage from "./lottieImages/LottieImage"
import { useLocale, useTranslations } from "next-intl"
import Reveal from "../Layout/RevealAnimation/Reveal"
const AboutSection = () => {
  const about = useTranslations("About-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <Reveal>
      <section
        id="about"
        className="text-white flex items-center px-5 lg:px-10"
        // data-aos="zoom-in-up"/
      >
        <div className="flex flex-col lg:flex-row gap-3 md:gap-16 items-center justify-center mb-10  ">
          {/* <LottieImage /> */}
          <div
            className={`mt-4 md:mt-0 px-4 ${
              isArabic ? "text-right" : "text-left"
            } flex flex-col  justify-center`}
          >
            <Reveal>
              <h1
                className={`text-4xl text-center ${
                  isArabic ? "lg:text-right" : "lg:text-left"
                } font-bold text-[#BED250] mb-4`}
              >
                {about("title")}
              </h1>
            </Reveal>
            <p className="text-base lg:text-lg">{about("discreption")}</p>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default AboutSection
