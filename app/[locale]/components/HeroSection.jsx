"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useLocale, useTranslations } from "next-intl"
import HeroLottie from "../../../public/lottie-animation/HeroLottie.json"
import Lottie from "lottie-react"
import { useEffect, useState } from "react"

const HeroSection = () => {
  const hero = useTranslations("Hero-Section")
  const locale = useLocale()
  const [lottieBrowser, setLottieBrowser] = useState()
  useEffect(() => {
    if (typeof document !== undefined) {
      setLottieBrowser(
        <Lottie animationData={HeroLottie} className="h-full w-full" />
      )
    }
  }, [])
  const isArabic = locale === "ar"
  const resumeLink =
    locale === "fr" || locale === "ar"
      ? "https://drive.google.com/file/d/1VFvGw_JwM5QNK-vsRKN0n_nTkQP4z78I/view?usp=drive_link"
      : "https://drive.google.com/file/d/1flEfVu5DwFayeTeI3YhbNULU4sdYBxKw/view?usp=drive_link"

  return (
    <section data-aos="zoom-in-up">
      <div className="flex md:flex-row gap-6 h-screen items-center justify-center flex-col mb-10 lg:px-10">
        <div
          className={`md:col-span-7 px-4 text-center ${
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
          className={`sm:col-span-5 place-content-center place-self-center ${
            isArabic ? "order-last md:order-first" : ""
          }`}
        >
          <div className="mt-10 md:mt-0">
            <Image
              src={"/avatar.png"}
              width={400}
              height={400}
              alt="personal"
              priority
              className="rounded-full border-4 border-[#BED250] border-double"
            />
          </div>
        </div>
      </div>
      (
      <div className="absolute inset-0 hidden md:block  opacity-10 -z-[1]">
        {lottieBrowser}
      </div>
    </section>
  )
}

export default HeroSection
