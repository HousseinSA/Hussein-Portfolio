// ParticleComponent.js
import React, { useCallback, useState, useEffect } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

const ParticleComponent = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {}, [])

  if (isMobile) {
    return null
  }

  return (
    <div style={{ pointerEvents: "none", zIndex: "-20" }}>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          fullScreen: { enable: false },
          interactivity: {
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: false,
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#606874",
            },
            links: {
              color: "#606874",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 0.8,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 2500,
              },
              value: 30,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="w-full h-full absolute top-0 left-0 pointer-events-none -z-20"
      />
    </div>
  )
}

export default ParticleComponent
