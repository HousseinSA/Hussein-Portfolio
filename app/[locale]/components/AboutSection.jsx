"use client"
import Image from "next/image"
import { useState, useTransition } from "react"
import TabButton from "./TabButton"
import { useLocale, useTranslations } from "next-intl"

const AboutSection = () => {
  const about = useTranslations("About-Section")
  const locale = useLocale()
  const isArabic = locale === "ar"
  const tabContents = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="flex gap-3 items-center mt-3 flex-wrap">
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
              width={20}
              height={20}
              alt="javascript logo"
            />
            <span>Javascript</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              }
              width={20}
              height={20}
              alt="html5 logo"
            />
            <span>HTML</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              }
              width={20}
              height={20}
              alt="CSS logo"
            />

            <span>CSS</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              }
              width={20}
              height={20}
              alt="React logo"
            />
            <span>React</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              }
              width={20}
              height={20}
              alt="NextJS logo"
            />
            <span>Nextjs</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              }
              width={20}
              height={20}
              alt="TailwindCSS logo"
            />
            <span>TailwindCSS</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              }
              width={20}
              height={20}
              alt="Bootstrap logo"
            />
            <span>Bootstrap</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              }
              width={20}
              height={20}
              alt="NodeJS logo"
            />
            <span>NodeJS</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              }
              width={20}
              height={20}
              alt="MongodDB logo"
            />
            <span>MondgoDB</span>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              }
              width={20}
              height={20}
              alt="Github logo"
              className="bg-white"
            />
            <span>Github</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul
          className={`list-disc ${isArabic ? "direction" : ""} mt-3 direction `}
        >
          <li className="marker:text-[#bed250]">
            {about("certificationList1")}
          </li>
          <li className="marker:text-[#bed250]">
            {about("certificationList2")}
          </li>
          <li className="marker:text-[#bed250]">
            {about("certificationList3")}
          </li>
        </ul>
      ),
    },
    {
      title: "education",
      id: "education",
      content: (
        <ul className={`list-disc ${isArabic ? "" : ""} mt-3 direction `}>
          <li className="marker:text-[#bed250]">{about("educationList1")}</li>
          <li className="marker:text-[#bed250]">{about("educationList2")}</li>
          <li className="marker:text-[#bed250]">{about("educationList3")}</li>
        </ul>
      ),
    },
  ]
  const [tab, setTab] = useState("skills")
  const [loading, startTransition] = useTransition()
  function handelTabChange(id) {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className="text-white" id="about" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 py-8 px-4 sm:py-16 xl:px-16">
        <Image
          src={"/about_image.jpg"}
          width={500}
          height={500}
          alt="laptop image"
          className="rounded-md"
        />
        <div
          className={`mt-4 md:mt-0 ${
            isArabic ? "text-right" : "text-left"
          } flex flex-col h-full`}
        >
          <h1
            className={`text-4xl  text-center ${
              isArabic ? "text-right" : "md:text-left"
            }  font-bold text-[#BED250] mb-4`}
          >
            {about("title")}
          </h1>
          <p className="text-base lg:text-lg">{about("discreption")}</p>
          <div className={`flex mt-4 ${isArabic && "justify-end"}   space-x-3`}>
            <TabButton
              selectedTab={() => handelTabChange("skills")}
              active={tab === "skills"}
            >
              {about("skills")}
            </TabButton>
            <TabButton
              selectedTab={() => handelTabChange("education")}
              active={tab === "education"}
            >
              {about("education")}
            </TabButton>
            <TabButton
              selectedTab={() => handelTabChange("certifications")}
              active={tab === "certifications"}
            >
              {about("certifications")}
            </TabButton>
          </div>
          <div className="mt-4">
            {tabContents.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
