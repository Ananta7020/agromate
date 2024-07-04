import React, { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const handleNavbarCollapse = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');

      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    };

    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
    
    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener('click', handleNavbarCollapse);
    });

    return () => {
      responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.removeEventListener('click', handleNavbarCollapse);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">Ananta Raut</a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
