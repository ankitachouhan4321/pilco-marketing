
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

// PILCO CONTACT DETAILS
// Replace these with Pilco's confirmed contact numbers.
const whatsappNumber = "919810074596";
const phoneNumber = "+919810074596";

// CATEGORY DETAILS
const categoryName = "Mezzanine Floors";

// SIX MAIN CATEGORY IMAGES
// Add images inside public/img/mezzanine/
const images = [
  "/img/Mezzanine-floors/1.png",
  "/img/Mezzanine-floors/1.1.png",
  "/img/Mezzanine-floors/1.2.png",
  "/img/Mezzanine-floors/1.3.png",
  "/img/Mezzanine-floors/1.4.png",

];

const MezzanineFloors = () => {
  const [activeImage, setActiveImage] = useState(0);

  const whatsappMessage = encodeURIComponent(
    `Hello Pilco, I am interested in your Mezzanine Floors.

I need a customized mezzanine floor solution for my warehouse or industrial facility.

Please share details about:
- Available mezzanine floor designs
- Load-bearing capacity
- Customization options
- Staircases, railings and access systems
- Pricing and quotation
- Installation and project support

Please contact me with more information.`
  );

  return (
    <>
      {/* BREADCRUMB START */}
      <Breadcrumb title="Mezzanine Floors" />
      {/* BREADCRUMB END */}

      {/* CATEGORY INTRODUCTION START */}
      <section className="category-page">
        <div className="container">

          <div className="category-intro text-center mt-5">

            <h1 className="heading">
              Mezzanine Floors Manufacturer in Delhi
            </h1>

            <p className="category-description text-center">
              Pilco is a Mezzanine Floors Manufacturer in
              Delhi, offering efficient and cost-effective
              solutions for maximizing unused vertical space
              in warehouses, factories, and industrial
              facilities. Our custom mezzanine floors are
              designed to create additional usable floor
              space without expanding the existing building
              footprint. These structures are ideal for
              storage, inventory management, production areas,
              offices, and material handling operations.
            </p>

            <p className="category-description text-center">
              Built with strong structural components, our
              mezzanine floors can be customized to suit
              specific load-bearing requirements, layouts,
              and operational needs. They help businesses
              increase storage capacity and operational
              efficiency while reducing the need for costly
              building extensions or relocation. Depending
              on available height and structural requirements,
              custom mezzanine floors can double or triple
              usable warehouse space.
            </p>

            <p className="category-description text-center">
              Pilco provides customized mezzanine floor
              solutions with options for staircases, safety
              railings, pallet gates, and access systems to
              support safe and convenient movement of goods
              and personnel. With flexible configurations,
              durable construction, and practical designs,
              our mezzanine floor systems help growing
              businesses optimize space, improve workflow,
              and enhance productivity.
            </p>

          </div>

        </div>
      </section>
      {/* CATEGORY INTRODUCTION END */}

      {/* MEZZANINE FLOOR BENEFITS START */}
      <section className="mezzanine-benefits-section py-5">
        <div className="container">

          <div className="text-center mb-4">
            {/* <div className="product-category-label top-head mb-2">
              SMART STORAGE | BETTER SPACE | HIGHER EFFICIENCY
            </div> */}

            <h2 className="heading">
              Custom Mezzanine Floors
            </h2>

            <h3 className="mb-3">
              Double & Triple Your Warehouse Space
            </h3>

            <p className="category-description text-center">
              Pilco provides custom mezzanine floors designed
              to double or triple the usable space in suitable
              warehouses and storage facilities. Our solutions
              help businesses maximize their existing floor
              space and increase storage capacity without
              the need for costly building expansion.
            </p>
          </div>

          <div className="row g-4">

            {/* BENEFIT 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="mezzanine-benefit-card h-100">
                <div className="mezzanine-benefit-icon">
                  <i className="fa-solid fa-expand"></i>
                </div>

                <h4>Increased Storage Capacity</h4>

                <p>
                  Get more usable space without increasing
                  your building footprint. Utilize unused
                  vertical space to create additional
                  storage levels and improve warehouse
                  organization.
                </p>
              </div>
            </div>

            {/* BENEFIT 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="mezzanine-benefit-card h-100">
                <div className="mezzanine-benefit-icon">
                  <i className="fa-solid fa-gear"></i>
                </div>

                <h4>Custom Design</h4>

                <p>
                  Tailored to your exact requirements
                  and business needs. Our mezzanine
                  floor systems can be customized
                  according to facility dimensions,
                  layouts, load requirements,
                  and available space.
                </p>
              </div>
            </div>

            {/* BENEFIT 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="mezzanine-benefit-card h-100">
                <div className="mezzanine-benefit-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>

                <h4>Strong & Durable</h4>

                <p>
                  Built with high-quality structural
                  materials for long-lasting performance.
                  Our mezzanine floors are designed
                  for strength, stability, and
                  dependable industrial use.
                </p>
              </div>
            </div>

            {/* BENEFIT 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="mezzanine-benefit-card h-100">
                <div className="mezzanine-benefit-icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>

                <h4>End-to-End Support</h4>

                <p>
                  From design to installation, we
                  handle it all. Pilco provides
                  assistance with mezzanine floor
                  planning, customization, structural
                  requirements, and installation
                  support.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* MEZZANINE FLOOR BENEFITS END */}


      {/* CATEGORY IMAGE GALLERY START */}
      <section className="product-info-section py-4">
        <div className="container-xxl">

          <article className="product-card-section">

            <div className="row justify-content-center">

              <div className="col-lg-10">

                {/* CATEGORY GALLERY HEADING */}
                <div className="text-center mb-4">

              

                  <h2 className="product-title">
                    Custom Mezzanine Floors
                  </h2>

                  <p className="product-short-description">
                    Explore our customized mezzanine floor
                    solutions designed to increase storage
                    capacity, utilize vertical space, and
                    improve warehouse efficiency.
                  </p>

                </div>

                {/* MAIN CATEGORY IMAGE */}
                <div
                  className="product-main-image"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={images[activeImage]}
                    alt={`Pilco ${categoryName} - Image ${activeImage + 1
                      }`}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      maxHeight: "550px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* SIX CLICKABLE IMAGE THUMBNAILS */}
                <div
                  className="product-thumbnails"
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(110px, 1fr))",
                    gap: "12px",
                    marginTop: "20px",
                  }}
                >
                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`product-thumbnail ${activeImage === index ? "active" : ""
                        }`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View Mezzanine Floor image ${index + 1
                        }`}
                      aria-pressed={activeImage === index}
                      style={{
                        width: "100%",
                        padding: "4px",
                        cursor: "pointer",
                        border:
                          activeImage === index
                            ? "2px solid #0074c7"
                            : "1px solid #ddd",
                        borderRadius: "6px",
                        overflow: "hidden",
                        background: "#fff",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Pilco Mezzanine Floor thumbnail ${index + 1
                          }`}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "95px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          display: "block",
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* CATEGORY ENQUIRY BUTTONS */}
                <div
                  className="product-action-buttons
                  d-flex flex-wrap justify-content-center
                  gap-3 mt-4"
                >

                  {/* WHATSAPP ENQUIRY */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-enquiry-btn"
                  >
                    Enquiry Now
                    <i className="fa-brands fa-whatsapp ms-2"></i>
                  </a>

                  {/* CALL NOW */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="product-call-btn"
                  >
                    Call Now
                    <i className="fa-solid fa-phone ms-2"></i>
                  </a>

                </div>

              </div>

            </div>

          </article>

        </div>
      </section>
      {/* CATEGORY IMAGE GALLERY END */}
    </>
  );
};

export default MezzanineFloors;
