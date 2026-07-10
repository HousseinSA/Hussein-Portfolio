"use client"
import React, { useState } from "react"
import ReactLoading from "react-loading"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaPaperPlane, FaEnvelope, FaPhone } from "react-icons/fa"
import Link from "next/link"
import FooterSection from "../Layout/FooterSection"
import { useLocale, useTranslations } from "next-intl"
import Reveal from "../Layout/RevealAnimation/Reveal"
import TitleAnimation from "../Layout/RevealAnimation/TitleAnimation"
import SectionTitle from "../Layout/SectionTitle"
import { motion } from "framer-motion"

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
        backgroundColor: "#BED250",
        color: "#ffffff",
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
  const isArabic = locale === "ar"
  const contactSection = useTranslations("Contact-Section")

  return (
    <Reveal>
      <section className="section" id="contact">
        <div className="grid grid-cols-1 h-full lg:grid-cols-2 w-full place-items-center justify-center gap-heading-gap lg:gap-16 relative">
          <div className="flex flex-col justify-between gap-heading-gap w-full">
            <div className="flex flex-col gap-heading-gap">
              <TitleAnimation>
                <SectionTitle title={contactSection("title")} />
              </TitleAnimation>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col gap-element-gap"
              >
                <p className="text-base text-center lg:text-start lg:text-lg text-[#adb7be]">
                  {contactSection("content").split("\n\n")[0]}
                </p>
                <div className="flex flex-col gap-element-gap text-sm lg:text-base text-[#adb7be]">
                  {contactSection("content").split("\n\n")[1]?.split("\n").map((item, idx) => {
                    const getIcon = () => {
                      if (item.includes("@") || item.includes("mail")) return <FaEnvelope className="text-[#BED250] flex-shrink-0" />
                      if (item.includes("222") || item.includes("phone")) return <FaPhone className="text-[#BED250] flex-shrink-0" />
                      return null
                    }
                    return (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        {getIcon()}
                        <span className="text-[#BED250]">{item}</span>
                      </motion.p>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            <div className="flex item-center lg:justify-start justify-center my-3 gap-element-gap md:pb-40 lg:pb-80 md:text-2xl text-xl cursor-pointer">
              <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link href={"https://github.com/HousseinSA"} target="_blank">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#BED250]/20 to-[#BED250]/5 border border-[#BED250]/30 flex items-center justify-center text-[#BED250] hover:border-[#BED250]/60 hover:shadow-lg hover:shadow-[#BED250]/20 transition duration-300">
                    <FaGithub />
                  </div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={"https://www.linkedin.com/in/husseinsa/"}
                  target="_blank"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#BED250]/20 to-[#BED250]/5 border border-[#BED250]/30 flex items-center justify-center text-[#BED250] hover:border-[#BED250]/60 hover:shadow-lg hover:shadow-[#BED250]/20 transition duration-300">
                    <FaLinkedin />
                  </div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={"https://www.instagram.com/hussein_codes/"}
                  target="_blank"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#BED250]/20 to-[#BED250]/5 border border-[#BED250]/30 flex items-center justify-center text-[#BED250] hover:border-[#BED250]/60 hover:shadow-lg hover:shadow-[#BED250]/20 transition duration-300">
                    <FaInstagram />
                  </div>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Link href={"tel:22241401147"} target="_blank">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#BED250]/20 to-[#BED250]/5 border border-[#BED250]/30 flex items-center justify-center text-[#BED250] hover:border-[#BED250]/60 hover:shadow-lg hover:shadow-[#BED250]/20 transition duration-300">
                    <FaWhatsapp />
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <FooterSection />
            </div>
          </div>

          <div className="w-full h-auto hidden lg:block absolute left-1/2 top-1/2 transform -translate-y-1/2 h-3/4 w-px bg-gradient-to-b from-transparent via-[#BED250]/30 to-transparent"></div>
          <div className="w-full h-auto">
            <form onSubmit={handelSubmit}>
              <div className="flex flex-col gap-element-gap justify-center backdrop-blur-md border border-[#BED250]/20 bg-gradient-to-br from-[#0f172a]/80 to-[#1a2a3a]/60 py-0 md:py-8 rounded-xl px-6 shadow-2xl shadow-[#BED250]/10 hover:shadow-[#BED250]/20 transition duration-300">
                <div>
                  <label className="mb-3 block text-[#BED250] font-medium" htmlFor="email">
                    {contactSection("email")}
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BED250]/50" />
                    <input
                      value={from}
                      className={`rounded-lg border border-[#BED250]/20 focus:border-[#BED250]/60 focus:outline-none focus:ring-2 focus:ring-[#BED250]/20 py-3 w-full bg-[#0f172a]/50 text-[#BED250] placeholder-[#adb7be]/50 transition duration-300 ${
                        isArabic ? "pr-10 pl-3" : "pl-10 pr-3"
                      }`}
                      type="email"
                      required
                      placeholder={contactSection("email")}
                      onChange={({ target }) => setFrom(target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-3 block text-[#BED250] font-medium"
                    htmlFor="subject"
                  >
                    {contactSection("subject")}
                  </label>
                  <input
                    value={subject}
                    onChange={({ target }) => setSubject(target.value)}
                    className={`rounded-lg border border-[#BED250]/20 focus:border-[#BED250]/60 focus:outline-none focus:ring-2 focus:ring-[#BED250]/20 py-3 w-full bg-[#0f172a]/50 text-[#BED250] placeholder-[#adb7be]/50 transition duration-300 ${
                      isArabic ? "pr-3" : "pl-3"
                    }`}
                    type="text"
                    required
                    placeholder={contactSection("subject")}
                  />
                </div>
                <div>
                  <label className="mb-3 block text-[#BED250] font-medium">
                    {contactSection("message")}
                  </label>
                  <textarea
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                    className={`rounded-lg border border-[#BED250]/20 focus:border-[#BED250]/60 focus:outline-none focus:ring-2 focus:ring-[#BED250]/20 py-3 w-full bg-[#0f172a]/50 text-[#BED250] placeholder-[#adb7be]/50 transition duration-300 resize-none ${
                      isArabic ? "pr-3" : "pl-3"
                    }`}
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder={contactSection("message")}
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-white rounded-lg py-3 w-full px-4 bg-gradient-to-r from-[#BED250] to-[#a8c41f] hover:shadow-lg hover:shadow-[#BED250]/30 transition duration-300 font-semibold flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <div className="flex gap-3 w-full justify-center items-center">
                      <ReactLoading
                        type={"spin"}
                        color={"#fff"}
                        height={20}
                        width={20}
                      />
                      <span>{contactSection("sending")}</span>
                    </div>
                  ) : (
                    <>
                      <span>{contactSection("send")}</span>
                      <FaPaperPlane size={16} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
            <div className="block text-white text-center lg:hidden">
              <FooterSection />
            </div>
          </div>
        </div>

        <ToastContainer />
      </section>
    </Reveal>
  )
}

export default ContactSection
