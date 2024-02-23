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
      <sec
        tion
        id="about"
        className="text-white flex items-center px-5 lg:px-10"
      >
        <div>
          <SkillsComponent />
          <div className="flex flex-col lg:flex-row gap-3 md:gap-16 items-center">
            <LottieImage />
            <div className="flex flex-col justify-end">
              <TitleAnimation>
                <h1
                  className={`text-4xl text-center ${
                    isArabic ? "lg:text-right" : "lg:text-left"
                  } font-bold text-[#BED250] mb-4`}
                >
                  {about("title")}
                </h1>
              </TitleAnimation>
              <p
                className={`text-base ${
                  isArabic ? "text-right" : "text-left"
                } lg:text-lg mb-4`}
              >
                {about("description")}
              </p>
            </div>
          </div>
        </div>
      </sec>
    </Reveal>
  )
}

export default AboutSection
