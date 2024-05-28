import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="/welcome" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/welcome" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/welcome" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="/welcome" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/welcome" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/welcome" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">Company name</h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Projects</h6>
              <p>
                <Link to="/todo" className="text-reset">
                  To-Do App
                </Link>
              </p>
              <p>
                <Link to="/news" className="text-reset">
                  News App
                </Link>
              </p>
              <p>
                <Link to="/users-data" className="text-reset">
                  Users CRUD Demo
                </Link>
              </p>
              <p>
                <Link to="/weather" className="text-reset">
                  Kolhapur Weather
                </Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/home" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                  About
                </Link>
              </p>
              <p>
                <Link to="/contact" className="text-reset">
                  Contact
                </Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        All Rights are reserved © Copyright 2024
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
