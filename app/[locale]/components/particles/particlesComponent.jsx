"use client"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"

import particles from "./particles.json"

const ParticlesComponent = () => {
  const test = {
    fpsLimit: 1000,
    fullScreen: { enable: false },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 5,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
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
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1500,
        },
        value: 100,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  }
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])
  return <Particles id="tsparticles" init={particlesInit} options={particles} />
}
export default ParticlesComponent
