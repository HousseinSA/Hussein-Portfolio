import LottieImage from "./lottieImages/LottieImage"
import React from "react"
import { useLocale, useTranslations } from "next-intl"
import Reveal from "../Layout/RevealAnimation/Reveal"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"
import SkillsComponent from "./SkillsSection/Skills"
const AboutSection = () => {
  const about = useTranslations("About-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <Reveal>
      <section
        id="about"
        clas
        sName="text-white flex  items-center px-5 lg:px-10"
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
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default AboutSection
