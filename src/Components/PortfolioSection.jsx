import React from 'react'
import Html from '../images/FinelHTML.png'
import javascript from '../images/FinelJS.png'
import Cpp from '../images/FinelCPP.png'
import ReactPng from '../images/FinelReact.png'
import Java from '../images/FinelJAVA.png'
import Adobe from '../images/FinelAdobe.png'
import Nodejs from '../images/FinelNodejs.png'
import Expressjs from '../images/FinelExpress.png'

export default function PortfolioSection() {
  return (
    <section className="page-section portfolio" id="portfolio">
    <div className="container">
        
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
    
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
       
        <div className="row justify-content-center">
       
            <div className="col-md-6 col-lg-3 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={Html} alt="..." />
                </div>
            </div>
          
            <div className="col-md-6 col-lg-3 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={javascript} alt="..." />
                </div>
            </div>
          
            <div className="col-md-6 col-lg-3 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={Cpp} alt="..." />
                </div>
            </div>
           
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={ReactPng} alt="..." />
                </div>
            </div>
       
            <div className="col-md-6 col-lg-3 mb-5 mb-md-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={Java} alt="..." />
                </div>
            </div>
           
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={Adobe} alt="..." />
                </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal7">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={Nodejs} alt="..." />
                </div>
            </div>
          
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal8">
                    <div
                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i
                                className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={Expressjs} alt="..." />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
