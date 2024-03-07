"use client"
import { useLottie } from "lottie-react"
import LottieAnimation from "../../../../../public/lottie-animation/aboutSectionLottie.json"
export default function LottieImage() {
  const options = {
    animationData: LottieAnimation,
    loop: true,
  }
  const { View } = useLottie(options)
  return (
    <>
      {View}
    </>
  ) 
}
