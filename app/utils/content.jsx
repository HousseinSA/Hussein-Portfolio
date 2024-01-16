import { useTranslations } from "next-intl"

export default function useProjectContent() {
  const projectsContent = useTranslations("Projects-Section")
  const projects = [
    {
      id: 1,
      title: "moviesInfo",
      discreption: projectsContent("project1"),
      Image: "/projects/moviesland.png",
      links: [
        "https://cina-info.netlify.app/",
        "https://github.com/HousseinSA/LandOfMovies",
      ],
    },
    {
      id: 2,
      title: "Ebook-store",
      discreption: projectsContent("project2"),
      Image: "/projects/Ebook-store.png",
      links: [
        "https://ebook-shop.netlify.app/",
        "https://github.com/HousseinSA/Ebook-Shop",
      ],
    },
    {
      id: 3,
      title: "Documents-editor",
      discreption: projectsContent("project3"),
      Image: "/projects/docs-editor.png",
      links: [
        "https://docs-editor.netlify.app/",
        "https://github.com/HousseinSA/Document-Editor-app",
      ],
    },
    {
      id: 4,
      title: "weather-viewer",
      discreption: projectsContent("project4"),
      Image: "/projects/weather-viewer.png",
      links: [
        "https://theweather101.netlify.app/",
        "https://github.com/HousseinSA/Weather-viewer",
      ],
    },
    {
      id: 5,
      title: "budget-register",
      discreption: projectsContent("project5"),
      Image: "/projects/budget-register.png",
      links: [
        "https://budget-register.netlify.app/",
        "https://github.com/HousseinSA/Budget-Register",
      ],
    },
    {
      id: 6,
      title: "Go-search-engine",
      Image: "/projects/go-search-engine.png",
      discreption: projectsContent("project6"),
      links: [
        "https://go-search-engine.vercel.app/",
        "https://github.com/HousseinSA/Go-search-engine",
      ],
    },
  ]

  return { projects }
}
