import { useTranslations } from "next-intl"

export function useProjectContent() {
  const projectsContent = useTranslations("Projects-Section")
  const projects = [
    {
      id: 1,
      title: "moviesInfo",
      descreption: projectsContent("project1"),
      Image: "/projects/moviesland.png",
      links: [
        "https://cina-info.netlify.app/",
        "https://github.com/HousseinSA/LandOfMovies",
      ],
      tags: ["ReactJS", "TailwindCSS", "IDM API"],
    },
    {
      id: 2,
      title: "Ebook-store",
      descreption: projectsContent("project2"),
      Image: "/projects/Ebook-store.png",
      links: [
        "https://ebook-shop.netlify.app/",
        "https://github.com/HousseinSA/Ebook-Shop",
      ],
      tags: ["ReactJS", "TailwindCSS", "Redux", "0auth", "Mongodb"],
    },
    {
      id: 3,
      title: "Documents-editor",
      descreption: projectsContent("project3"),
      Image: "/projects/docs-editor.png",
      links: [
        "https://docs-editor.netlify.app/",
        "https://github.com/HousseinSA/Document-Editor-app",
      ],
      tags: ["ReactJS", "TailwindCSS", "Socket.io", "nodeJs"],
    },
    {
      id: 4,
      title: "weather-viewer",
      descreption: projectsContent("project4"),
      Image: "/projects/weather-viewer.png",
      links: [
        "https://theweather101.netlify.app/",
        "https://github.com/HousseinSA/Weather-viewer",
      ],
      tags: ["ReactJS", "TailwindCSS", "WeatherAPI"],
    },
    {
      id: 5,
      title: "budget-register",
      descreption: projectsContent("project5"),
      Image: "/projects/budget-register.png",
      links: [
        "https://budget-register.netlify.app/",
        "https://github.com/HousseinSA/Budget-Register",
      ],
      tags: ["ReactJS", "bootstrap", "Redux"],
    },
    {
      id: 6,
      title: "Go-search-engine",
      Image: "/projects/go-search-engine.png",
      descreption: projectsContent("project6"),
      links: [
        "https://go-search-engine.vercel.app/",
        "https://github.com/HousseinSA/Go-search-engine",
      ],
      tags: ["Nextjs", "Tailwindcss", "Google-engine-api"],
    },
  ]

  return { projects }
}

export function useTechImages() {
  const frontEndSkills = [
    {
      language: "javascript",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      language: "Typescript",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      language: "HTML",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      language: "CSS",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      language: "REACT",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      language: "Redux",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      language: "Nextjs",
      imgLink: undefined,
    },
    {
      language: "PHP",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
    },
    {
      language: "Tailwind",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      language: "Bootstrap",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      language: "materialui",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
  ]
  const backendSkills = [
    {
      language: "NodeJS",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      language: "MongoDB",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      language: "Firebase",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    },
    {
      language: "express",
      imgLink: undefined,
    },
    {
      language: "mysql",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
  ]
  const tools = [
    {
      language: "Github",
      imgLink: undefined,
    },
    {
      language: "Git",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      language: "Figma",
      imgLink:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ]
  return { frontEndSkills, backendSkills, tools }
}
