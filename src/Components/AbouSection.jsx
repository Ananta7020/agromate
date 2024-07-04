import React from 'react'

export default function AbouSection() {
  return (
  <>
    <section className="page-section text-white mb-0" id="about">
        <div className="container">
         
            <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
        
            <div className="row">
                <div className="col-lg-4 ms-auto">
                    <p className="lead">Hello! I'm Ananta, a dedicated and enthusiastic computer science student with a strong passion for 
                    creating innovative and visually appealing digital experiences. Currently pursuing my Bachelor's degree in Computer Science, 
                    I am on a journey to explore and master various aspects of software development and design.</p>
                </div>
                <div className="col-lg-4 me-auto">
                    <p className="lead">My interest in technology goes beyond the classroom, with a particular focus on web development and design. 
                    I find joy in crafting elegant and user-friendly interfaces that seamlessly blend form and function. 
                    Proficient in front-end technologies like React, I enjoy turning creative ideas into interactive and engaging digital experiences.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
