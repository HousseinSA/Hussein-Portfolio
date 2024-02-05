<<<<<<< HEAD
import LottieImage from "./lottieImages/LottieImage"
=======
// import LottieImage from "./lottieImages/LottieImage"
>>>>>>> parent of 3a3f531 (fixing)
import React from "react"
import { useLocale, useTranslations } from "next-intl"
import Reveal from "../Layout/RevealAnimation/Reveal"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"
<<<<<<< HEAD
import SkillsComponent from "./SkillsSection/Skills"
=======
>>>>>>> parent of 3a3f531 (fixing)
const AboutSection = () => {
  const about = useTranslations("About-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <Reveal>
      <section
        id="about"
<<<<<<< HEAD
        className="text-white flex  items-center px-5 lg:px-10"
      >
        <div>
          <SkillsComponent />
          <div className="flex flex-col lg:flex-row gap-3 md:gap-16 items-center justify-center  ">
            <LottieImage />
            <div
              className={`mt-4 w-fit h-auto md:mt-0 px-0 sm:px-4 ${
                isArabic ? "text-right" : "text-left"
              } flex flex-col  justify-center`}
            >
              <TitleAnimation>
                <h1
                  className={`text-4xl text-center ${
                    isArabic ? "lg:text-right" : "lg:text-left"
                  } font-bold text-[#BED250] mb-4`}
                >
                  {about("title")}
                </h1>
              </TitleAnimation>
              <p className="text-base text-center sm:text-left lg:text-lg">
                {about("discreption")}
              </p>
            </div>
=======
        className="text-white flex items-center px-5 lg:px-10"
      >
        <div className="flex flex-col lg:flex-row gap-3 md:gap-16 items-center justify-center mb-10  ">
          {/* <LottieImage /> */}
          <div
            className={`mt-4 w-fit h-auto md:mt-0 px-0 sm:px-4 ${
              isArabic ? "text-right" : "text-left"
            } flex flex-col  justify-center`}
          >
            <TitleAnimation>
              <h1
                className={`text-4xl text-center ${
                  isArabic ? "lg:text-right" : "lg:text-left"
                } font-bold text-[#BED250] mb-4`}
              >
                {about("title")}
              </h1>
            </TitleAnimation>
            <p className="text-base text-center sm:text-left lg:text-lg">
              {about("discreption")}
            </p>
>>>>>>> parent of 3a3f531 (fixing)
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default AboutSection
<<<<<<< HEAD
=======


>>>>>>> parent of 3a3f531 (fixing)
