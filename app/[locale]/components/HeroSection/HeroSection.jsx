"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useLocale, useTranslations } from "next-intl"
import ParticlesComponent from "../particles/particlesComponent"

const HeroSection = () => {
  const hero = useTranslations("Hero-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  const resumeLink =
    locale === "fr" || locale === "ar"
      ? "https://drive.google.com/file/d/1VFvGw_JwM5QNK-vsRKN0n_nTkQP4z78I/view?usp=drive_link"
      : "https://drive.google.com/file/d/1flEfVu5DwFayeTeI3YhbNULU4sdYBxKw/view?usp=drive_link"
  return (
    <section id="about" className="relative  h-screen mx-auto mt-40 md:mt-0">
      <div className="flex md:flex-row gap-6 h-full items-center justify-center flex-col mb-10 lg:mb-0 px-10">
        <div
          className={`px-4 text-center ${
            isArabic ? "md:text-right" : "md:text-left"
          }`}
        >
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r text-right from-[#BED250] to-[#109C81]">
              {hero("hello")}
            </span>
            <br />
            <TypeAnimation
              sequence={[hero("name"), 1000, hero("work"), 1000, hero("work2")]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-dir mb-6 text-base sm:text-lg lg:text-xl">
            {hero("aboutme")}
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#BED250] to-[#109C81] text-white">
              <Link href={"mailto:nejihoussein1@gmail.com"}>
                {hero("hire")}
              </Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-[#BED250] via-[#109C81] to-cyan-500  mt-3">
              <span className="block bg-[#181818] hover:bg-slate-800 text-white rounded-full py-2 px-5">
                <Link href={resumeLink} target="_blank">
                  {hero("download")}
                </Link>
              </span>
            </button>
          </div>
        </div>
        <div
          className={`${
            isArabic ? "order-last md:order-first" : ""
          } mt-10 md:mt-0 w-full `}
        >
          <Image
            src="/avatar.png"
            alt="personal"
            width={350}
            height={350}
            sizes="(min-width: 980px) 342px, (min-width: 780px) calc(63.89vw - 271px), (min-width: 520px) 342px, calc(97vw - 143px)"
            className="rounded-full  border-4 border-[#BED250] border-double"
          />
        </div>
      </div>
      {/* <div className=" z-30 aboslute w-full h-full inset-0">
        <ParticlesComponent />
      </div> */}
    </section>
  )
}

export default HeroSection
