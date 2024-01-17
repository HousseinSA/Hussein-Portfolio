"use client"
import React, { useState } from "react"
import ReactLoading from "react-loading"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
const ContactSection = () => {
  const [from, setFrom] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  async function handelSubmit(ev) {
    ev.preventDefault()
    setLoading(true)
    const response = await fetch("https://formspree.io/f/myyryqar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, subject, message }),
    })
    const data = await response.json()
    if (data) {
      setLoading(false)
      toast.success("Mail sent Succesfully!", {
        backgroundColor: "#BED250", // Background color
        color: "#ffffff", // Text color
      })
      setFrom("")
      setMessage("")
      setSubject("")
    } else {
      setLoading(false)
      toast.error("Error,can't send mail")
    }
  }
  const isArabic = useLocale()
  const contactSection = useTranslations("Contact-Section")
  return (
    <section className="text-white" id="contact" data-aos="fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16   py-20 ">
        <div className="flex flex-col justify-between gap-3">
          <div>
            <h1
              className={`text-4xl font-bold ${
                isArabic ? "md:text-right" : "md:text-left"
              } text-center text-[#BED250] mb-4`}
            >
              {contactSection("title")}
            </h1>
            <p className="text-base lg:text-lg text-slate-500">
              {contactSection("content")}
            </p>
          </div>
          <div className="flex item-center sm:justify-start justify-center gap-4 lg:pb-80  md:text-2xl text-xl text-[#BED250]    cursor-pointer">
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
        </div>
        <form onSubmit={handelSubmit}>
          <div className="flex flex-col gap-4 w-full justify-center bg-[#181818] py-5 rounded-md md:px-4 px-3">
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
              <label className="mb-2 block text-[#BED250]" htmlFor="subject">
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
              className="rounded-md border-none focus:outline-none  mt-3 py-2 pl-3 w-full bg-[#121212] text-[#BED250]"
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
      </div>
      <ToastContainer />
    </section>
  )
}

export default ContactSection
