import { Route, Routes } from "react-router-dom"
import { HomePage,PortafolioPage,ContactMePage } from "../pages"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/"  element={<HomePage/>}/>
            <Route path="/portafolio"  element={<PortafolioPage/>}/>
            <Route path="/contactame"  element={<ContactMePage/>}/>
            
        </Routes>
    </>
  )
}
