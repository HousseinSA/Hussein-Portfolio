"use client"
import { useState, useEffect } from "react"
function useVisibleSectionId() {
  const [visibleSectionId, setVisibleSectionId] = useState(null)

  useEffect(() => {
    // Function to get the id of the visible section
    function getVisibleSectionId() {
      const sections = document.querySelectorAll("section[id]")
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        const threshold = rect.height * 0.8 // consider more than half visible

        if (
          rect.top >= -threshold &&
          rect.bottom <= window.innerHeight + threshold
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
