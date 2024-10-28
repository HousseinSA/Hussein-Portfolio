import { useTranslations } from "next-intl"

export function useProjectContent() {
  const projectsContent = useTranslations("Projects-Section")
  const projects = [
    {
      id: 0,
      title: "ShopNest-e-commerce",
      description: projectsContent("project7"),
      image: "/projects/ShopNest-e-commerce.png",
      links: [
        "https://shopnest-frontend.vercel.app/",
        "https://github.com/HousseinSA/ShopNest",
      ],
      tags: ["Nextjs", "TailwindCSS", "Mongodb", "next-auth", 'zustand', 'others'],
    },
    {
      id: 1,
      title: "Stats-Master",
      description: projectsContent("project0"),
      image: "/projects/statsMaster.png",
      links: [
        "https://stat-master.vercel.app/",
        "https://github.com/HousseinSA/Stat-master",
      ],
      tags: ["Nextjs", "TailwindCSS", "Football API", "Zustand"],
    },
    {
      id: 2,
      title: "moviesInfo",
      description: projectsContent("project1"),
      image: "/projects/moviesland.png",
      links: [
        "https://cina-info.netlify.app/",
        "https://github.com/HousseinSA/LandOfMovies",
      ],
      tags: ["ReactJS", "TailwindCSS", "IDM API"],
    },
    {
      id: 3,
      title: "Ebook-store",
      description: projectsContent("project2"),
      image: "/projects/Ebook-store.png",
      links: [
        "https://ebook-shop.netlify.app/",
        "https://github.com/HousseinSA/Ebook-Shop",
      ],
      tags: ["ReactJS", "TailwindCSS", "Redux", "0auth", "Mongodb"],
    },
    {
      id: 4,
      title: "Documents-editor",
      description: projectsContent("project3"),
      image: "/projects/docs-editor.png",
      links: [
        "https://docs-editor.netlify.app/",
        "https://github.com/HousseinSA/Document-Editor-app",
      ],
      tags: ["ReactJS", "TailwindCSS", "Socket.io", "nodeJs"],
    },
    {
      id: 5,
      title: "weather-viewer",
      description: projectsContent("project4"),
      image: "/projects/weather-viewer.png",
      links: [
        "https://theweather101.netlify.app/",
        "https://github.com/HousseinSA/Weather-viewer",
      ],
      tags: ["ReactJS", "TailwindCSS", "WeatherAPI"],
    },
    {
      id: 6,
      title: "budget-register",
      description: projectsContent("project5"),
      image: "/projects/budget-register.png",
      links: [
        "https://budget-register.netlify.app/",
        "https://github.com/HousseinSA/Budget-Register",
      ],
      tags: ["ReactJS", "bootstrap", "Redux"],
    },
    {
      id: 7,
      title: "Go-search-engine",
      image: "/projects/go-search-engine.png",
      description: projectsContent("project6"),
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
      tool: "javascript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      tool: "Typescript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      tool: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      tool: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      tool: "REACT",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      tool: "Redux",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      tool: "Nextjs",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      tool: "PHP",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
    {
      tool: "Tailwind",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      tool: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      tool: "materialui",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
  ]
  const backendSkills = [
    {
      tool: "NodeJS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      tool: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      tool: "Firebase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    },
    {
      tool: "express",
      img: undefined,
    },
    {
      tool: "mysql",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
  ]
  const tools = [
    {
      tool: "Github",
      img: undefined,
    },
    {
      tool: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      tool: "Figma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ]
  return { frontEndSkills, backendSkills, tools }
}
