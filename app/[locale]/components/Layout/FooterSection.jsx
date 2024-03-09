import { useTranslations } from "next-intl"

const FooterSection = () => {
  const Year = new Date().getFullYear()
  const footer = useTranslations("Footer-Section")
  return (
    <footer>
      <div className="text-sm lg:text-base xl:text-md text-[#adb7be]  w-full py-3 md:py-4">
        <p>
          {footer("footer")} &copy; {Year}
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
