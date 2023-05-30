import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const BtnCv = () => {
  return (
    <>
        <Link to="https://drive.google.com/uc?id=12ArXnqZ5W8YqDfdmqwyzhlTve3-sO97A&export=download" target="_blank" className="flex items-center border-2 border-blue-500 hover:bg-green-500 hover:text-white hover:border-inherit text-[#448aff] rounded-full px-8 py-2 gap-2">
            <BsFillFileEarmarkTextFill/>
            <p>CURRICULUM</p>
        </Link>
    </>
  )
}
