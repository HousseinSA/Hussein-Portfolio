"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
const HeroSection = () => {
  return (
    <section data-aos="fade-up">
      <div className="grid grid-cols-1 items-center sm:grid-cols-12 mb-10">
        <div className="col-span-7 text-center sm:text-left">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BED250] to-[#109C81]">
              Hello,{`I'm`}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Hussein",
                1000,
                "Frontend Developer.",
                1000,
                "Full Stack Developer.",
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] mb-6 text-base sm:text-lg lg:text-xl">
            A Full Stack Developer passionate about crafting seamless and
            intuitive frontend experiences.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#BED250] to-[#109C81] text-white">
              <Link href={"mailto:nejihoussein1@gmail.com"}>Hire Me</Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-[#BED250] via-[#109C81] to-cyan-500  mt-3">
              <span className="block bg-[#181818] hover:bg-slate-800 text-white rounded-full py-2 px-5">
                <Link
                  href={
                    "https://drive.google.com/file/d/1flEfVu5DwFayeTeI3YhbNULU4sdYBxKw/view?usp=drive_link"
                  }
                  target="_blank"
                >
                  Download / View CV
                </Link>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-content-center place-self-center">
          <div className="h-auto mt-4 lg:mt-0  relative">
            <Image
              src={"/avatar.png"}
              width={500}
              height={500}
              alt="personal image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
