<<<<<<< HEAD
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
    <div className="w-full max-w-[500px] md:max-w-[700px] h-full mx-auto">
      {View}
    </div>
  )
}
=======
// "use client"
// import { useLottie } from "lottie-react"
// import LottieAnimation from "../../../../../public/lottie-animation/aboutSectionLottie.json"
// export default function LottieImage() {
//   const options = {
//     animationData: LottieAnimation,
//     loop: true,
//   }
//   const { View } = useLottie(options)
//   return (
//     <div className="w-full max-w-[500px] md:max-w-[700px] h-full mx-auto">
//       {View}
//     </div>
//   )
// }
>>>>>>> parent of 3a3f531 (fixing)
