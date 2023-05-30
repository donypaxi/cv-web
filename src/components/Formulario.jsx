import { useState } from "react"
import { BtnEnviar } from "./BtnEnviar"

export const Formulario = () => {

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const limpiar = () => {
    setName('')
    setMessage('')
  }  
  

  return (
    <>
        <form className="shadow-lg shadow-slate-500 p-5 flex flex-col rounded-lg gap-3">
            <label className="text-slate-700 text-base ">Ingrese su nombre</label>
            <input 
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            className="border-2 border-slate-300 h-12 px-3 rounded-md mb-3 focus:border-red-900" type="text"/>
            <label className="text-slate-700">Mensaje</label>
            <textarea 
            value={message}
            onChange={(e)=>setMessage(e.target.value)} className="border-2 border-slate-300 rounded-lg p-3" name="" id="" cols="30" rows="5"></textarea>
            <BtnEnviar limpiar={limpiar} name={name} message={message}/>
        </form>
    </>
  )
}
