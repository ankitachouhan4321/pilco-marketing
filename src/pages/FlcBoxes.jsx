
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

const whatsappNumber = "919810074596";
const phoneNumber = "+919810074596";

const images = [
  "/img/flc-boxes/1.png",
  "/img/flc-boxes/1.1.png",
  "/img/flc-boxes/1.2.png",
  "/img/flc-boxes/1.3.png",
  "/img/flc-boxes/1.4.png",
  "/img/flc-boxes/1.5.png",
];

const specifications = [
  ["External Size (mm)", "1470 × 1140 × 990"],
  ["Pallet Material", "100% New PE"],
  ["Sleeve Material", "PP Material (3500 g/m²)"],
  ["Weight (Approx.)", "—"],
  ["Dynamic Load", "Up to 800 kg"],
  ["Static Load", "Up to 3000 kg"],
  ["Racking Load", "—"],
  ["Temperature Range", "-20°C to +60°C"],
  ["Color", "Pallet & Lid: Black | Sleeve: Grey"],
  ["Folding Type", "Foldable Sleeve (Collapsible)"],
  ["Entry Type", "4-Way Forklift Entry"],
];

const features = [
  "Heavy-duty pallet base with anti-slip top.",
  "PP sleeve with high tear and impact resistance.",
  "Locking clips for quick assembly and secure holding.",
  "Fully foldable sleeve for maximum space saving.",
];

const FlcBoxes = () => {
  const [activeImage, setActiveImage] = useState(0);

  const whatsappMessage = encodeURIComponent(
    "Hello Pilco, I want to enquire about PILCO FLC Boxes. Please share pricing, specifications and availability."
  );

  return (
    <>
      <Breadcrumb title="FLC Boxes" />

      {/* CATEGORY INTRODUCTION */}
      <section className="category-page">
        <div className="container">
          <div className="category-intro text-center mt-5">

            <h1 className="heading">
              FLC Boxes Manufacturer in Delhi
            </h1>

            <p className="category-description text-center">
              Pilco FLC (Foldable Large Containers) Boxes
              provide a durable and space-efficient solution
              for industrial storage and transportation.
              Designed for warehouses, manufacturing,
              logistics, automotive, food processing,
              and retail industries, these containers
              ensure organized storage and convenient
              material handling.
            </p>

            <p className="category-description text-center">
              Their collapsible design reduces the space
              required for empty containers and return
              transportation. Built for repeated use,
              PILCO FLC Boxes help improve storage
              efficiency, reduce logistics costs,
              and simplify bulk goods handling.
            </p>

          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="product-info-section py-4">
        <div className="container-xxl">
          <article className="product-card-section">

            <div className="row g-4 g-lg-5">

              {/* PRODUCT IMAGES */}
              <div className="col-lg-5">

                <div className="product-main-image">
                  <img
                    src={images[activeImage]}
                    alt={`PILCO FLC Boxes ${activeImage + 1}`}
                    className="img-fluid"
                  />
                </div>

                <div className="product-thumbnails flex-wrap">
                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`product-thumbnail ${activeImage === index ? "active" : ""
                        }`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View image ${index + 1}`}
                      aria-pressed={activeImage === index}
                    >
                      <img
                        src={image}
                        alt={`FLC Box thumbnail ${index + 1}`}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>

              </div>

              {/* PRODUCT INFORMATION */}
              <div className="col-lg-7">
                <div className="product-info">

                  <div className="product-category-label top-head">
                    FOLDABLE LARGE CONTAINERS
                  </div>

                  <h2 className="product-title">
                    PILCO FLC Boxes
                  </h2>

                  <p className="product-short-description">
                    PILCO FLC Boxes feature a strong PE pallet
                    base, a foldable PP sleeve, and a secure
                    locking system. Their stackable and
                    reusable construction makes them ideal
                    for bulk storage, warehouse operations,
                    and efficient transportation.
                  </p>

                  <h3 className="specification-heading mt-3">
                    Product Features
                  </h3>

                  <ul className="product-short-description ps-3">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* BUTTONS */}
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

                </div>
              </div>

            </div>

          </article>
        </div>
      </section>

      {/* PRODUCT SPECIFICATIONS */}
      <section className="py-4">
        <div className="container">

          <h2 className="heading text-center mb-4">
            FLC Boxes Specifications
          </h2>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">

              <thead className="table-primary">
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>

              <tbody>
                {specifications.map(([label, value], index) => (
                  <tr key={index}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </section>

    </>
  );
};

export default FlcBoxes;
