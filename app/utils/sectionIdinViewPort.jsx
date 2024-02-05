import { useEffect, useState } from "react"

function useVisibleSectionId() {
  const [visibleSectionId, setVisibleSectionId] = useState(null)

  useEffect(() => {
    // Function to get the id of the visible section
    function getVisibleSectionId() {
      const sections = document.querySelectorAll("section[id]")
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          setVisibleSectionId(section.id)
          return
        }
      }
      setVisibleSectionId(null)
    }

    // Attach the event listener
    window.addEventListener("scroll", getVisibleSectionId)
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", getVisibleSectionId)
    }
  }, []) // Empty dependency array ensures that this effect runs only once

  return visibleSectionId
}

export default useVisibleSectionId
