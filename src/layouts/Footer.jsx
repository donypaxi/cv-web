import { SocialNetworks } from "../components/SocialNetworks"
import wave from "../assets/svg/wave.svg"
import svgFooter from "../assets/svg/svgFooter.svg"
export const Footer = () => {
  return (
    <>
      <div className="px-10 flex justify-between items-center py-5 text-xl">
          <p className="text-base font-semibold text-black ">2023 - DonyDev</p>
          <SocialNetworks/>
      </div>
    </>
  )
}
