"use client"
import React, { useState } from "react"
import ReactLoading from "react-loading"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import FooterSection from "../Layout/FooterSection"
import { useLocale, useTranslations } from "next-intl"
import Reveal from "../Layout/RevealAnimation/Reveal"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"

const ContactSection = () => {
  const [from, setFrom] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handelSubmit(ev) {
    ev.preventDefault()
    setLoading(true)
    const response = await fetch(process.env.NEXT_PUBLIC_FORSPREE_LINK, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ from, subject, message }),
    })
    if (response.status === 200) {
      setLoading(false)
      toast.success("Mail sent Succesfully!", {
        backgroundColor: "#BED250", // Background color
        color: "#ffffff", // Text color,
      })
      setFrom("")
      setMessage("")
      setSubject("")
    } else {
      setLoading(false)
      toast.error("Error,can't send mail", {})
    }
  }
  const locale = useLocale()
  const isArabic = locale === "arabic"
  const contactSection = useTranslations("Contact-Section")
  return (
    <Reveal>
      <section className="md:mt-10 mt-3 w-full h-full" id="contact">
        <div className="grid grid-cols-1 h-full lg:grid-cols-2 w-full place-items-center justify-center ">
          <div className="flex flex-col justify-between gap-3">
            <div>
              <TitleAnimation>
                <h1
                  className={`title font-bold ${
                    isArabic ? "md:text-right" : "md:text-left"
                  } text-center text-[#BED250] mb-4`}
                >
                  {contactSection("title")}
                </h1>
              </TitleAnimation>
              <p className="text-base text-center lg:text-start lg:text-lg text-[#adb7be]">
                {contactSection("content")}
              </p>
            </div>
            <div className="flex item-center lg:justify-start justify-center my-3 gap-4 lg:pb-80  md:text-2xl text-xl text-[#BED250] cursor-pointer">
              <Link href={"https://github.com/HousseinSA"} target="_blank">
                <FaGithub className="hover:scale-110 transition duration-200" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/husseinsa/"}
                target="_blank"
              >
                <FaLinkedin className="hover:scale-110 transition duration-200" />
              </Link>
              <Link
                href={"https://www.instagram.com/hussein_codes/"}
                target="_blank"
              >
                <FaInstagram className="hover:scale-110 transition duration-200" />
              </Link>
              <Link href={"tel:22241401147"} target="_blank">
                <FaWhatsapp className="hover:scale-110 transition duration-200" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <FooterSection />
            </div>
          </div>
          <div className="w-full h-auto">
            <form onSubmit={handelSubmit}>
              <div className="flex flex-col gap-4 justify-center bg-[#181818] py-0 md:py-5 rounded-md px-4 ">
                <div>
                  <label className="mb-2 block text-[#BED250]" htmlFor="email">
                    {contactSection("email")}
                  </label>
                  <input
                    value={from}
                    className="rounded-md border-none focus:outline-none  py-2 pl-3 w-full bg-[#121212] text-[#BED250]"
                    type="email"
                    required
                    placeholder={contactSection("email")}
                    onChange={({ target }) => setFrom(target.value)}
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-[#BED250]"
                    htmlFor="subject"
                  >
                    {contactSection("subject")}
                  </label>
                  <input
                    value={subject}
                    onChange={({ target }) => setSubject(target.value)}
                    className="rounded-md border-none
                focus:outline-none  py-2 pl-3 w-full bg-[#121212] text-[#BED250]"
                    type="text"
                    required
                    placeholder={contactSection("subject")}
                  />
                </div>
                <textarea
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                  className="rounded-md border-none focus:outline-none  py-2 pl-3 w-full bg-[#121212] text-[#BED250]"
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder={contactSection("message")}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="text-white rounded-md py-2 w-full px-4 bg-[#BED250] hover:bg-opacity-80"
                >
                  {loading ? (
                    <div className="flex gap-3 w-full justify-center items-center">
                      <ReactLoading
                        type={"spin"}
                        color={"#fff"}
                        height={25}
                        width={25}
                      />
                      <span>{contactSection("sending")}</span>
                    </div>
                  ) : (
                    contactSection("send")
                  )}
                </button>
              </div>
            </form>
            <div className="block text-white text-center lg:hidden">
              <FooterSection />
            </div>
          </div>
        </div>

        {/* have to fix notification bug  */}
        <ToastContainer />
      </section>
    </Reveal>
  )
}

export default ContactSection
