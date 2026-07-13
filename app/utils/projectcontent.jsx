import { useTranslations } from "next-intl"

export function useProjectContent() {
  const projectsContent = useTranslations("Projects-Section")
  const projects = [
    {
      id: 0,
      title: "Krily-Engine",
      description: projectsContent("Krily-Engine"),
      image: "/projects/KriliyEngin.png",
      links: [
        "https://kriliyengin.com/",
      ],
      isPrivateRepo: false,
      tags: ["Nextjs", "TailwindCSS", "Mongodb"],
    },
    {
      id: 1,
      title: "Krily-Car",
      description: projectsContent("Krily-Car"),
      image: "/projects/kriliycar.png",
      links: [
        "https://dashboard.kriliycar.com/",
      ],
      isPrivateRepo: true,
      tags: ["Nextjs", "TailwindCSS", "Mongodb"],
    },
    {
      id: 2,
      title: "Egtaely",
      description: projectsContent("Egtaely"),
      image: "/projects/egtaely.png",
      links: [
        "https://transport.egtaely.com/",
      ],
      isPrivateRepo: true,
      tags: ["Nextjs", "TailwindCSS", "Mongodb"],
    },
    {
      id: 3,
      title: "Toyota-ecu-services",
      description: projectsContent("Toyota-ecu-services"),
      image: "/projects/toyota-ecu-services.png",
      links: [
        "https://toyota-ecu-services.com",
      ],
      isPrivateRepo: true,
      tags: ["Nextjs", "TailwindCSS", "Mongodb", "pdfjs"],
    },
    {
      id: 4,
      title: "Safaris Center",
      description: projectsContent("Safaris Center"),
      image: "/projects/safaris-center-demo.png",
      links: [
        "https://safaris-center.vercel.app",
      ],
      isPrivateRepo: true,
      tags: ["Nextjs", "TailwindCSS", "Mongodb", "pdfjs"],
    },
  ]

  return { projects }
}

export function useTechImages() {
  const frontEndSkills = [
    {
      tool: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      tool: "TypeScript",
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
      tool: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      tool: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      tool: "Redux",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      tool: "Zustand",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-plain.svg",
    },
    {
      tool: "Tailwind",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      tool: "Sass",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      tool: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      tool: "Material UI",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
    {
      tool: "Cloudinary",
      img: "https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg",
    },
  ]

  const backendSkills = [
    {
      tool: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      tool: "Express",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      tool: "PHP",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
    {
      tool: "Laravel",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
    },
    {
      tool: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      tool: "MySQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      tool: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      tool: "Firebase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    },
    {
      tool: "Supabase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      tool: "Prisma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
  ]

  const mobileSkills = [
    {
      tool: "Flutter",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    },
    {
      tool: "React Native",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      tool: "Dart",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    },
  ]

  const cmsSkills = [
    {
      tool: "WordPress",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    },
    {
      tool: "Drupal",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg",
    },
  ]

  const devopsSkills = [
    {
      tool: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      tool: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      tool: "Docker",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      tool: "AWS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      tool: "VS Code",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      tool: "Postman",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      tool: "Figma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      tool: "Slack",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
    },
  ]

  return {
    frontEndSkills,
    backendSkills,
    mobileSkills,
    cmsSkills,
    devopsSkills,
  }
}
