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
      <section id="about" className="section">
        <div className="flex flex-col w-full h-full  items-center justify-center">
          <SkillsComponent />
          <div className="flex flex-col  lg:flex-row justify-center gap-3 md:gap-16 items-center">
            <div className=" w-full sm:w-1/2 lg:w-1/3">
              <LottieImage />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-end">
              <TitleAnimation>
                <h1
                  className={`title text-center ${
                    isArabic ? "lg:text-right" : "lg:text-left"
                  } font-bold text-[#BED250] mb-4`}
                >
                  {about("title")}
                </h1>
              </TitleAnimation>
              <p
                className={`text-base text-white ${
                  isArabic ? "text-right" : "text-left"
                } lg:text-lg mb-4`}
              >
                {about("description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default AboutSection
