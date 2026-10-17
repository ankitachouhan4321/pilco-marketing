import React from 'react'
import ContactForm from '../component/ContactForm';

const Contact = () => {
  return (
    <>
      {/* breadcrumb start */}

      <section id="breadcrumb" className="pilco-breadcrumb-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pilco-breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/">
                  <i className="fa-solid fa-house me-2"></i>
                  Home
                </a>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                <span>Contact Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* breadcrumb start */}

      {/* Contact Section start*/}
      <ContactForm />

      {/* Contact Section end*/}

      {/* map Section start*/}

      <section id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3499.5256178694394!2d77.1754785!3d28.7038339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d021bacfa5121%3A0x2d6798bf89eb73da!2sPILCO%20MARKETING%20%26%20MANUFACTURING%20CORP.%20(INDIA)!5e0!3m2!1sen!2sin!4v1792229339329!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
      {/* map Section end*/}
    </>
  );
}

export default Contact

