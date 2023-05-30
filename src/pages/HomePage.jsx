import { AboutMe } from "../layouts/AboutMe"
import { ContactMe } from "../layouts/ContactMe"
import { Footer } from "../layouts/Footer"
import { Header } from "../layouts/Header"
import { Principal } from "../layouts/Principal"
import { Projects } from "../layouts/Projects"

export const HomePage = () => {
  return (
    <>
        <Header/>
        <Principal/>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
        <Footer/>
    </>
  )
}
