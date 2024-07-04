import React from 'react'
import portImage from '../images/logo-new.png'
// import portImage from '../images/FinelLOGO3.0.png'

export default function HeroSec() {
  return (
    <header className="masthead text-white text-center" id="heroSec">
        <div className="container d-flex align-items-center flex-column">
        
            <img className="masthead-avatar mb-5" src={portImage} alt="..." />
            
            <h1 className="masthead-heading text-uppercase mb-0">Ananta raut</h1>
            
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            
            <p className="masthead-subheading font-weight-light mb-0">UI Designer - Web Developer - Illustrator</p>
        </div>
    </header>
  )
}
