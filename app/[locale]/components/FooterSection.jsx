import { useTranslations } from "next-intl"

const FooterSection = () => {
  const Year = new Date().getFullYear()
  const footer = useTranslations('Footer-Section')
  return (
    <footer>
      <div className="flex text-base sm:text-lg text-white justify-center items-center w-full p-5">
        <p>{footer('footer')} &copy; {Year}</p>
      </div>
    </footer>
  )
}

export default FooterSection
