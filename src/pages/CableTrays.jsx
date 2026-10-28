
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

// PILCO CONTACT DETAILS
const whatsappNumber = "919810074596";
const phoneNumber = "+919810074596";

// MAIN CATEGORY IMAGES
const categoryImages = [
  "/img/cable-trays/main.png",
  "/img/cable-trays/main-1.png",
  "/img/cable-trays/main-2.png",
  "/img/cable-trays/main-3.png",
  "/img/cable-trays/main-4.png",
];

// CABLE TRAY RANGE
const trayRange = [
  "Light Duty Perforated Cable Trays",
  "Medium Duty Perforated Cable Trays",
  "Heavy Duty Perforated Cable Trays",
  "Ladder Type Cable Trays",
  "Wire Mesh Cable Trays",
  "Solid Bottom Cable Trays",
];

// AVAILABLE FINISHES
const finishes = [
  "M.S. Painted",
  "Hot Dip Galvanized (HDG)",
  "Powder Coated",
  "Zinc Coated",
];

// ACCESSORIES
const accessories = [
  {
    image: "/img/cable-trays/acc-1.png",
  },
  {
    image: "/img/cable-trays/acc-2.png",
  },
  {
    image: "/img/cable-trays/acc-3.png",
  },
  {
    image: "/img/cable-trays/acc-4.png",
  },
];

// FOUR CABLE TRAY PRODUCTS
const cableTrayProducts = [
  {
    id: 1,
    name: "Wire Mesh Cable Tray",
    images: [
      "/img/cable-trays/1.png",

    ],
    description:
      `Pilco Wire Mesh Cable Trays offer a practical
      solution for organizing and supporting electrical
      cables. Their open mesh structure supports airflow,
      convenient cable routing, and flexible installation
      in commercial and industrial facilities.`,
  },
  {
    id: 2,
    name: "GI Perforated Cable Tray",
    images: [
      "/img/cable-trays/2.png",
   
    ],
    description:
      `Pilco GI Perforated Cable Trays provide reliable
      support and organized routing for electrical cables.
      Their perforated design allows ventilation and
      convenient cable installation. Suitable for
      industrial plants, commercial buildings, and
      infrastructure projects.`,
  },
  {
    id: 3,
    name: "Ladder Type Cable Tray",
    images: [
      "/img/cable-trays/3.png",
 
    ],
    description:
      `Pilco Ladder Type Cable Trays are designed for
      efficient cable management in industrial and
      commercial installations. Their open ladder
      structure provides cable support, ventilation,
      and accessibility for installation and maintenance.`,
  },

  {
    id: 4,
    name: "Solid Bottom Cable Tray",
    images: [
      "/img/cable-trays/4.png",
  
    ],
    description:
      `Pilco Solid Bottom Cable Trays provide continuous
      support for electrical cables while helping protect
      them from external contact and falling debris.
      These trays are suitable for organized cable
      routing in industrial and commercial installations.`,
  },
];

// REUSABLE IMAGE GALLERY
const ImageGallery = ({ images, name }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <div className="product-main-image">
        <img
          src={images[activeImage]}
          alt={`${name} - View ${activeImage + 1}`}
          className="img-fluid"
        />
      </div>

      <div className="product-thumbnails d-flex flex-wrap gap-2 mt-3">
        {images.map((image, index) => (
          <button
            type="button"
            key={index}
            className={`product-thumbnail ${activeImage === index ? "active" : ""
              }`}
            onClick={() => setActiveImage(index)}
            aria-label={`View ${name} image ${index + 1}`}
            aria-pressed={activeImage === index}
          >
            <img
              src={image}
              alt={`${name} thumbnail ${index + 1}`}
              className="img-fluid"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </>
  );
};

// ENQUIRY AND CALL BUTTONS
const EnquiryButtons = ({ productName }) => {
  const whatsappMessage = encodeURIComponent(
    `Hello Pilco, I want to enquire about ${productName}. Please share specifications, pricing and availability.`
  );

  return (
    <div className="product-action-buttons mt-4">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="product-enquiry-btn"
      >
        Enquiry Now
        <i className="fa-brands fa-whatsapp ms-2"></i>
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className="product-call-btn"
      >
        Call Now
        <i className="fa-solid fa-phone ms-2"></i>
      </a>
    </div>
  );
};

// REUSABLE PRODUCT CARD
const CableTrayProductCard = ({ product }) => {
  return (
    <section className="product-info-section py-3">
      <div className="container-xxl">
        <article className="product-card-section">

          <div className="row g-4 g-lg-5">

            <div className="col-lg-5">
              <ImageGallery
                images={product.images}
                name={product.name}
              />
            </div>

            <div className="col-lg-7">
              <div className="product-info">

                <div className="product-category-label top-head">
                  CABLE TRAYS
                </div>

                <h2 className="product-title">
                  {product.name}
                </h2>

                <p className="product-short-description">
                  {product.description}
                </p>

                <EnquiryButtons
                  productName={product.name}
                />

              </div>
            </div>

          </div>

        </article>
      </div>
    </section>
  );
};

// MAIN CABLE TRAYS PAGE
const CableTrays = () => {
  return (
    <>
      <Breadcrumb title="Cable Trays" />

      {/* MAIN INTRODUCTION */}
      <section className="category-page">
        <div className="container">

          <div className="category-intro text-center mt-5">

            <h1 className="heading">
              Cable Trays Manufacturer in Delhi
            </h1>

            <p className="category-description text-center">
              Pilco manufactures high-quality Cable Trays
              designed for strength, durability, and
              reliability. With over 50 years of
              manufacturing experience, we provide
              efficient cable management solutions
              for industrial facilities, commercial
              buildings, infrastructure projects,
              and power plants.
            </p>

            <p className="category-description text-center">
              Our cable trays help organize, support,
              and protect electrical cables while
              ensuring safe and efficient installations.
              We offer a wide range of cable tray
              types, finishes, and customized sizes
              to meet specific project requirements.
            </p>

          </div>
        </div>
      </section>

      {/* CABLE TRAY RANGE AND FINISHES */}
      <section className="py-4">
        <div className="container">

          <div className="row g-4">

            <div className="col-lg-6">
              <h2 className="product-title">
                Our Cable Tray Range
              </h2>

              <ul className="product-short-description ps-3">
                {trayRange.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6">
              <h2 className="product-title">
                Available Finishes
              </h2>

              <ul className="product-short-description ps-3">
                {finishes.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* CUSTOMIZATION */}
          <div className="mt-4">

            <h2 className="product-title">
              Customized Cable Tray Solutions
            </h2>

            <p className="product-short-description">
              Pilco specializes in the customization and
              fabrication of cable trays according to
              specific project requirements. We manufacture
              cable trays in different sizes, dimensions,
              and thicknesses to suit industrial and
              commercial applications.
            </p>

            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle">
                <tbody>
                  <tr>
                    <th scope="row">Standard Length</th>
                    <td>2500 mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Width</th>
                    <td>50 mm to 600 mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Height</th>
                    <td>40 mm to 100 mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Thickness</th>
                    <td>1.6 mm to 3 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </section>

      {/* CABLE TRAY ACCESSORIES */}
      <section className="py-4 bg-light">
        <div className="container">

          <h2 className="heading text-center mb-3">
            Cable Tray Accessories
          </h2>

          <p className="category-description text-center mb-4">
            Pilco provides cable tray accessories
            designed for secure installation, seamless
            connections, and efficient cable routing.
            Available in different sizes and specifications
            to suit project requirements.
          </p>

          <div className="row g-3">
            {accessories.map((item, index) => (
              <div
                className="col-lg-3 col-md-6"
                key={index}
              >
                <div className="card border h-100 text-center">

                  <div className="card-body px-lg-3">
                    <img
                      src={item.image}
                      alt={`Pilco ${item.name}`}
                      className="img-fluid "
                      style={{
                        height: "160px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      loading="lazy"
                    />

                    <h3 className="h6 fw-bold mb-0">
                      {item.name}
                    </h3>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* MAIN CATEGORY IMAGE GALLERY */}
      <section className="product-info-section py-4">
        <div className="container-xxl">

          <article className="product-card-section">

            <div className="row justify-content-center">

              <div className="col-lg-8 col-md-10 col-12">

                {/* MAIN IMAGE WITH THUMBNAILS */}
                <ImageGallery
                  images={categoryImages}
                  name="Pilco Cable Trays"
                />

              </div>

            </div>

          </article>

        </div>
      </section>


      {/* FOUR CABLE TRAY PRODUCTS */}
      <section className="py-3">
        <div className="container text-center">
          <h2 className="heading">
            Our Cable Tray Products
          </h2>
        </div>
      </section>

      {cableTrayProducts.map((product) => (
        <React.Fragment key={product.id}>
          <CableTrayProductCard product={product} />
          <hr />
        </React.Fragment>
      ))}

    </>
  );
};

export default CableTrays;
