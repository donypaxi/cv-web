import { useEffect, useState } from "react";
import { HiMenu, HiX} from "react-icons/hi";
import { Link } from "react-scroll";
import { SocialNetworks } from "./SocialNetworks";

export const NavBar = () => {

  const [open, setOpen] = useState(true)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('bg-black/70')) {
        setOpen(!open)
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open])
  const navBar = () => {
    setOpen(!open)
  }

  return (
    <>
        <div className={`${open ? 'flex' : 'hidden'} md:hidden justify-end`}>
          <HiMenu onClick={navBar} className="cursor-pointer text-3xl"/>
        </div>
        <div className={` ${open? 'hidden' : 'flex'} md:hidden justify-end`}>
          <HiX onClick={navBar} className="cursor-pointer text-3xl"/>
        </div>
        
        <div 
          className={` bg-black/70 h-full w-screen ${open ? 'w-0' : 'fixed top-0 left-0 -z-10 '} `}>
          <div className={`absolute text-slate-800 h-full top-0 flex flex-col gap-5 py-20 px-5 duration-300 ${!open? 'right-0' : '-right-64'}  bg-white w-60`}>
          <Link onClick={()=>setOpen(!open)} className='border-b-2 hover:border-cyan-200 transition-colors cursor-pointer duration-150 hover:text-cyan-600' 
            to="header"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-110}>Inicio</Link>
            <Link onClick={()=>setOpen(!open)} className='border-b-2 hover:border-cyan-200 transition-colors cursor-pointer duration-150 hover:text-cyan-600' 
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-90}>Portafolio</Link>
            <Link onClick={()=>setOpen(!open)} className='border-b-2 hover:border-cyan-200 transition-colors cursor-pointer duration-150 hover:text-cyan-600' 
            to="contactme"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-10}>Contáctame</Link>
            <div className="flex justify-around items-center mt-5 text-lg ">
              <SocialNetworks/>
            </div>
          </div>
        </div>
    </>
  )
}
