import react from 'react'
import {Link} from 'react-router-dom'


import React from 'react'

const Navbar = () => {
  return (
    <header>

      {/* Top Bar */}
      <div className="topbar py-2">
        <div className="container-xl">
          <div className="d-flex justify-content-center justify-content-md-between align-items-center small">

            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-geo-alt-fill"></i>
              <span>G.T Karnal Road, Delhi-110033, India</span>
            </div>

            <div className="d-none d-md-flex align-items-center gap-4">

              <a
                href="mailto:abc@gmail.com"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-envelope-fill me-2"></i>
                abc@gmail.com
              </a>

              <a
                href="tel:+918045804245"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-telephone-fill me-2"></i>
              +91 80458 04245
              </a>

            </div>

          </div>
        </div>
      </div>


      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2 sticky-top">
        <div className="container-xl">

          {/* Logo */}
          <Link className="navbar-brand col-lg-1 col-md-2 col-sm-3 col-4" to="/">
            <img
              src="/img/logo.jpg"
              alt="PILCO"
              className="navbar-logo img-fluid w-75"
            />
          </Link>


          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pilcoNavbar"
            aria-controls="pilcoNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-1 menu-icon"></i>
          </button>


          {/* Menu */}
          <div
            className="collapse navbar-collapse"
            id="pilcoNavbar"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/about">
                  About Us
                </Link>
              </li>

              
              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/about">
                  Our Products
                </Link>
              </li>



              {/* Products Dropdown */}
              {/* <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle px-lg-3 bg-transparent border-0"
                  data-bs-toggle="dropdown"
                >
                  Products
                </button>

                <ul className="dropdown-menu border-0 shadow">

                  <li>
                    <Link
                      className="dropdown-item py-2"
                      to="/products/product-1"
                    >
                      Product Category 1
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item py-2"
                      to="/products/product-2"
                    >
                      Product Category 2
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item py-2"
                      to="/products/product-3"
                    >
                      Product Category 3
                    </Link>
                  </li>

                </ul>
              </li> */}


              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/industries">
                  Industries
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/gallery">
                  Gallery
                </Link>
              </li>


            


              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/contact">
                  Contact Us
                </Link>
              </li>


              {/* CTA */}
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <Link
                  className="btn pilco-btn px-4 py-3"
                  to="/contact"
                >
                  GET IN TOUCH
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

    </header>
   
  );
};

export default Navbar;
