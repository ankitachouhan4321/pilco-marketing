import React from 'react'

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
                                    Don't hesitate to contact us for more information about
                                    <br className="d-none d-md-block" />
                                    our company or industrial solutions.
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
                    <div className="container">

                        <div className="row g-5">

                            {/* Company */}
                            <div className="col-lg-4 col-md-6">

                                <img
                                    src="/img/logo.jpg"
                                    alt="PILCO"
                                    className="footer-logo mb-3"
                                />

                                <p className="footer-about">
                                    PILCO delivers dependable industrial machinery and solutions
                                    focused on performance, quality and long-term customer value.
                                </p>

                                <div className="d-flex gap-2 mt-4">

                                    <a href="#" className="social-icon">
                                        <i className="bi bi-facebook"></i>
                                    </a>

                                    <a href="#" className="social-icon">
                                        <i className="bi bi-linkedin"></i>
                                    </a>

                                    <a href="#" className="social-icon">
                                        <i className="bi bi-instagram"></i>
                                    </a>

                                    <a href="#" className="social-icon">
                                        <i className="bi bi-youtube"></i>
                                    </a>

                                </div>

                            </div>


                            {/* Support */}
                            <div className="col-lg-2 col-md-6">

                                <h5 className="footer-title">
                                    Support
                                </h5>

                                <ul className="footer-links list-unstyled">

                                    <li>
                                        <a href="/contact">Contact Us</a>
                                    </li>

                                    <li>
                                        <a href="/support">Support</a>
                                    </li>

                                    <li>
                                        <a href="/faq">FAQ</a>
                                    </li>

                                    <li>
                                        <a href="/products">Products</a>
                                    </li>

                                    <li>
                                        <a href="/service">Services</a>
                                    </li>

                                </ul>

                            </div>


                            {/* Company */}
                            <div className="col-lg-2 col-md-6">

                                <h5 className="footer-title">
                                    Company
                                </h5>

                                <ul className="footer-links list-unstyled">

                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>

                                    <li>
                                        <a href="/industries">Industries</a>
                                    </li>

                                    <li>
                                        <a href="/gallery">Gallery</a>
                                    </li>

                                    <li>
                                        <a href="/quality">Quality</a>
                                    </li>

                                    <li>
                                        <a href="/contact">Get In Touch</a>
                                    </li>

                                </ul>

                            </div>


                            {/* Newsletter */}
                            <div className="col-lg-4 col-md-6">

                                <h5 className="footer-title">
                                    Newsletter
                                </h5>

                                <p className="footer-about">
                                    Subscribe to receive the latest product updates, industry news
                                    and company information.
                                </p>


                                <form className="mt-3">

                                    <div className="row g-2">

                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control footer-input"
                                                placeholder="Name"
                                            />
                                        </div>

                                        <div className="col-sm-6">
                                            <input
                                                type="email"
                                                className="form-control footer-input"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="btn footer-newsletter-btn w-100 py-3"
                                            >
                                                SIGN UP NEWSLETTER
                                                <i className="bi bi-send ms-2"></i>
                                            </button>
                                        </div>

                                    </div>

                                </form>

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

                                    <a href="#">
                                        Terms of Use
                                    </a>

                                    <span>|</span>

                                    <a href="#">
                                        Privacy Policy
                                    </a>

                                    <span>|</span>

                                    <a href="#">
                                        Cookie Policy
                                    </a>

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
