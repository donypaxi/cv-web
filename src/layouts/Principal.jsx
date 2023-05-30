import { SocialNetworks } from "../components/SocialNetworks"

export const Principal = () => {
  return (
    <>
        <div id="header" className="mx-auto px-10 flex flex-col items-center mt-16 text-slate-700">
          <h2>Bienvenidos, soy</h2>
          <h1 className="text-5xl font-bold text-black text-center ">Donnie Paxi</h1>
          <p className="text-center text-cyan-600 text-3xl font-bold mt-7">Software & Web Developer</p>
          <p className="text-xl md:text-xl lg:text-2xl md:mx-20 mx-10 mt-7 text-center">"Mejorando la vida de las personas."</p>
          <p className="my-7">Tacna - Perú</p>
        </div>
        <div className="px-10 flex justify-center w-1/2 mx-auto text-3xl">
          <SocialNetworks/>
        </div>

    </>
  )
}
