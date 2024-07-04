import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import Navbar from './Components/Navbar'
import HeroSec from './Components/HeroSec'
import PortfolioSection from './Components/PortfolioSection'
import AbouSection from './Components/AbouSection'
import ContactSection from './Components/ContactSection'
import FooterSection from './Components/FooterSection'
import Models from './Components/Models'
import './Mycss.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSec/>
    <PortfolioSection/>
    <AbouSection/>
    <ContactSection/>
    <FooterSection/>
    <Models/>
    </>
  )
}

export default App
