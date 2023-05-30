import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SocialNetworks = () => {
  return (
    <>
        <div className="flex justify-between gap-5 ">
            <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://www.instagram.com/donypaxi/" target="_blank">
               <BsInstagram/>
            </Link>
            <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://www.facebook.com/trinchvr" target="_blank">
              <BsFacebook/>
            </Link>
            <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://github.com/donypaxi" target="_blank">
              <BsGithub/>
            </Link>
            <Link className="hover:text-slate-400 hover:scale-125 duration-200" to="https://bit.ly/3LRSKDu" target="_blank">
              <BsLinkedin/>
            </Link>
        </div>
    </>
    
  )
}
