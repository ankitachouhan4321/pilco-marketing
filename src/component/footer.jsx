import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
           <footer className="pilco-footer">

    {/* TOP CTA */}
    <div className="footer-cta py-4">
        <div className="container">
            <div className="row align-items-center g-3">

                <div className="col-lg-8">
                    <div className="footer-small-title">
                        NEED HELP?
                    </div>

                    <h4 className="mb-0 mt-2">
                        Have questions about our storage and material handling
                        solutions? Get in touch with our team.
                    </h4>
                </div>

                <div className="col-lg-4 text-lg-end">
                    <a
                        href="/contact"
                        className="btn footer-contact-btn px-4 py-3"
                    >
                        CONTACT US
                        <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                </div>

            </div>
        </div>
    </div>


    {/* MAIN FOOTER */}
    <div className="footer-main py-5">
        <div className="container-lg">

            <div className="row g-5">

                {/* Company */}
                <div className="col-lg-4 col-sm-6">

                    <img
                        src="/img/logo.jpg"
                        alt="PILCO Storage Systems"
                        className="footer-logo mb-3"
                    />

                    <p className="footer-about">
                        Since 1987, PILCO has been providing reliable storage
                        and material handling solutions including warehouse
                        racks, industrial storage systems, plastic pallets,
                        crates, cable trays and work platforms. 
                    </p>

                    <div className="d-flex gap-2 mt-4">

                        <a href="https://www.facebook.com/sharer.php?u=https://www.pilcoonline.com/" className="social-icon">
                            <i className="bi bi-facebook"></i>
                        </a>

                        <a href="https://www.linkedin.com/cws/share/?url=https://www.pilcoonline.com/" className="social-icon">
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a href="https://x.com/share?url=https://www.pilcoonline.com/" className="social-icon">
                            <i className="bi bi-twitter-x"></i>
                        </a>


                    </div>

                </div>


               

                {/* Company */}
                <div className="col-lg-2 col-sm-6">

                    <h5 className="footer-title">
                        Company
                    </h5>

                    <ul className="footer-links list-unstyled">

                        <li>
                            <a href="/about">About Us</a>
                        </li>

                        <li>
                            <a href="/">Our Products</a>
                        </li>

                        <li>
                            <a href="/">Industries</a>
                        </li>

                        <li>
                            <a href="/">Gallery</a>
                        </li>

                        <li>
                            <a href="/">Contact Us</a>
                        </li>

                    </ul>

                </div>


                {/* Products */}
                <div className="col-lg-3 col-sm-6">

                    <h5 className="footer-title">
                        Our Products
                    </h5>

                    <ul className="footer-links list-unstyled">

                        <li>
                            <a href="/">Warehouse Racks</a>
                        </li>

                        <li>
                            <a href="/">Heavy Duty Racks</a>
                        </li>

                        <li>
                            <a href="/">Plastic Pallets</a>
                        </li>

                        <li>
                            <a href="/">Plastic Crates</a>
                        </li>

                        <li>
                            <a href="/">Cable Trays</a>
                        </li>

                        <li>
                            <a href="/">Work Platforms</a>
                        </li>

                    </ul>

                </div>

                 {/* Contact Information */}
                <div className="col-lg-3 col-sm-6">

                    <h5 className="footer-title">
                        Contact Information
                    </h5>

                    <ul className="footer-contact-list list-unstyled">

                        <li className="d-flex align-items-start mb-3">
                            <i className="bi bi-telephone-fill me-3 mt-1"></i>

                            <div>
                                {/* <span className="footer-contact-label">
                                    Phone
                                </span> */}

                                <a href="tel:+918045804245">
                                    +91 8045804245
                                </a>
                            </div>
                        </li>

                        <li className="d-flex align-items-start mb-3">
                            <i className="bi bi-envelope-fill me-3 mt-1"></i>

                            <div>
                                {/* <span className="footer-contact-label">
                                    Email
                                </span> */}

                                <a href="mailto:abc@gmail.com">
                                    abc@gmail.com
                                </a>
                            </div>
                        </li>

                        <li className="d-flex align-items-start">
                            <i className="bi bi-geo-alt-fill me-3 mt-1"></i>

                            <div>
                                {/* <span className="footer-contact-label">
                                    Address
                                </span> */}

                                <span>
                                    145-146, 1st Floor, Vardhman Fortune Mall,
                                    Opp. Hans Cinema, G.T Karnal Road,
                                    Delhi-110033, Delhi, India
                                </span>
                            </div>
                        </li>

                    </ul>

                </div>


            </div>


            {/* Bottom */}
            <div className="footer-bottom mt-5 pt-4">

                <div className="row align-items-center g-3">

                    <div className="col-md-6">
                        <p className="mb-0">
                            © 2026 PILCO. All rights reserved.
                        </p>
                    </div>

                    <div className="col-md-6 text-md-end">

                       <p className="mb-0">
                           Designed By <a href='https://viraladsmedia.com/'> viraladsmedia</a>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    </div>

</footer>
        </>
    )
}

export default Footer;
