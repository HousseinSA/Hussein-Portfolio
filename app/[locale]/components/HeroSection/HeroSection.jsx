"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useLocale, useTranslations } from "next-intl"
import ParticleComponent from "./particles/particlesComponent"
import Reveal from "../Layout/RevealAnimation/Reveal"

const HeroSection = () => {
  const hero = useTranslations("Hero-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  const resumeLink =
    locale === "fr" || locale === "ar"
      ? "https://drive.google.com/file/d/1VFvGw_JwM5QNK-vsRKN0n_nTkQP4z78I/view?usp=sharing"
      :  "https://drive.google.com/file/d/18KI2Sc-zLPrWfxnLevD2ieuMICsPSRpX/view?usp=sharing"

  const handleMail = () => {
    window.location.href = "mailto:nejihoussein1@gmail.com"
  }

  return (
    <Reveal>
      <section className="relative sm:mt-20 lg:mt-0 h-screen">
        <div className="flex relative md:flex-row gap-6 h-full items-center justify-center lg:justify-around flex-col mb-10 lg:mb-0 z-10 px-10">
          <div
            className={`px-4  lg:flex-1 text-center ${
              isArabic ? "md:text-right" : "md:text-left"
            } `}
          >
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r text-right from-[#BED250] to-[#109C81]">
                {hero("hello")}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  hero("name"),
                  1000,
                  hero("work"),
                  1000,
                  hero("work2"),
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#adb7be] text-dir mb-6 text-base sm:text-lg lg:text-xl">
              {hero("aboutme")}
            </p>
            <div className="z-20">
              <button
                onClick={handleMail}
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#BED250] to-[#109C81] text-white"
                aria-label={hero("hire")}
              >
                {hero("hire")}
              </button>
              <Link href={resumeLink} target="_blank">
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-[#BED250] via-[#109C81] to-cyan-500  mt-3">
                  <span className="block bg-[#181818] hover:bg-slate-800 text-white rounded-full py-2 px-5">
                    {hero("download")}
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div
            className={`${
              isArabic ? "order-last md:order-first" : ""
            } mt-10 md:mt-0`}
          >
            <Image
              src="/personal-image.png"
              alt="personal"
              width={350}
              height={350}
              priority
              sizes="(min-width: 1500px) 342px, (min-width: 1040px) calc(25.68vw - 38px), (min-width: 780px) calc(31.25vw - 79px), (min-width: 520px) 342px, calc(97vw - 143px)"
              className="rounded-full  border-4 border-[#BED250] border-double"
            />
          </div>
        </div>
        <ParticleComponent />
      </section>
    </Reveal>
  )
}

export default HeroSection
