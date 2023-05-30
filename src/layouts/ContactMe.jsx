import { Link } from "react-router-dom";
import { Logo } from "../components/Logo"
import { BsEnvelope, BsGeoAlt, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Formulario } from "../components/Formulario";

export const ContactMe = () => {
  return (
    <>

      <div id="contactme" className="px-10 mb-10">
        <h2 className=" pt-16 pb-12 text-4xl lg:text-5xl font-bold text-center ">Contáctame</h2>
        <div  className="grid md:grid-cols-2 gap-y-10">
          <div className="px-6 text-lg text-slate-700 flex flex-col gap-4 justify-center">
              <div className="flex gap-2 items-center">
                <BsGeoAlt/>
                <p>Tacna Perú</p>
              </div>
              <div className="flex gap-2 items-center">
                <BsEnvelope/>
                <p>donypaxi@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <BsWhatsapp/>
                <p>+51957696996</p>
              </div>
              <div className="flex gap-2 items-center hover:text-blue-500">
                <BsLinkedin/>
                <div>
                  <Link className=" " to="https://bit.ly/3LRSKDu" target="_blank" >https://bit.ly/3LRSKDu</Link>
                </div>
              </div>
          </div>
          <Formulario/>
        </div>
      </div>
    </>
  )
}
