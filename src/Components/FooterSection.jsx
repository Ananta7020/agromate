import React from "react";

export default function FooterSection() {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                Chh.Sambhajinagar
                <br />
                431001
              </p>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Connect Here</h4>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://m.facebook.com/ananta.raut.5059"
              >
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://alvo.chat/3Qq9"
              >
                <i className="fab fa-fw fa-whatsapp"></i>
              </a>

              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/ananta-raut-a43a31266"
              >
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.instagram.com/ananta_raut_3000/?hl=en"
              >
                <i className="fab fa-fw fa-instagram"></i>
              </a>
            </div>

            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Technology Used</h4>
              <p className="lead mb-0">
                React Js
                <br />
                Bootstrap
                <br />
                JavaScript
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
