import { useEffect, useState } from "react"

export const BtnEnviar = ({name,message,limpiar}) => {
  const [disabled, setDisabled] = useState(true)

   
  

  useEffect(() => {
    if(name.length > 3 && message.length > 0){
      setDisabled(false)
    }else {
      setDisabled(true)
    }
  }, [name,message])
  
  
  const handleClick =() => {
    limpiar()
    const phone = "957696996"
    const encodedMessage = encodeURIComponent(`Mi nombre es ${name},  ${message}`);

    const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappLink);

  }
  return (
    <>
        <input 
        onClick={handleClick}
        className={` 
        text-white text-xl h-10 duration-200 border-2  rounded-lg
        ${disabled ? 'bg-slate-500 cursor-not-allowed' : 'cursor-pointer bg-green-500' }`}
         type="button" value="Enviar" disabled={disabled} />
    </>
  )
}
