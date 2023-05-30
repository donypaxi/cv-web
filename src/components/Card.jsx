import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs"
import {ListProject}  from "../helpers/ListProject"
import { Link } from "react-router-dom"
export const Card = () => {
    const listProjects = ListProject()
    return (
    <>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 h-full ">
            {listProjects.map(({name,description,img,git,page},i) => (
                <div key={i}>
                    <div className="p-4 mt-4 mb-2 border-2  border-slate-300 mx-3 rounded-md">
                        <div>
                            <h2 className="text-2xl  font-bold">{name}</h2>
                            <p className="sm:h-36 text-slate-700">{description}</p>
                        </div>
                        <Link to={page} target="_blank">
                            <div className="w-76 h-56 md:w-full md:h-96 mx-auto bg-cover bg-top rounded-lg mt-5" style={{backgroundImage:`url(${img})`}}>
                                
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-4 text-xl mx-5 text-slate-600">
                        <Link to={page} target="_blank">
                            <BsBoxArrowUpRight/>
                        </Link>
                        <Link to={git} target="_blank">
                            <BsGithub/>
                        </Link>
                    </div>
                </div>
                
            ))}
        </div>
        
    </>
  )
}
