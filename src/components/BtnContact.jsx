import { BsFillPersonBadgeFill } from "react-icons/bs";
import { Link } from "react-scroll";

export const BtnContact = () => {
  return (
    <>
        <Link 
         to="contactme"
         smooth={true}
         duration={500}
         spy={true}
         exact="true"
         offset={-10}
         className="cursor-pointer px-8 py-2 bg-blue-600 hover:bg-blue-400 text-white flex items-center rounded-full gap-2">
            <BsFillPersonBadgeFill/>
            <p>CONTÁCTAME</p>
        </Link>
    </>
  )
}
