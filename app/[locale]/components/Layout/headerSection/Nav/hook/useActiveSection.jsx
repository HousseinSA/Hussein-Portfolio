// import { useEffect, useState } from "react"

// const useActiveSection = (sectionIds) => {
//   const [activeSection, setActiveSection] = useState("hellothere")

//   useEffect(() => {
//     const handleScroll = () => {
//       for (const sectionId of sectionIds) {
//         const element = document.getElementById(sectionId)

//         if (element) {
//           const rect = element.getBoundingClientRect()

//           if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//             console.log(sectionId)
//             setActiveSection(sectionId)
//           }
//         }
//       }

//       // If no active section is found, set it to null
//       // setActiveSection(null)
//     }

//     document.addEventListener("scroll", handleScroll)

//     // Cleanup event listener on component unmount
//     return () => {
//       document.removeEventListener("scroll", handleScroll)
//     }
//   }, [sectionIds])

//   return activeSection
// }

// export default useActiveSection
