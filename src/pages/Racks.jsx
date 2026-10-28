
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

// PILCO CONTACT DETAILS
const whatsappNumber = "919810074596";
const phoneNumber = "+919810074596";

// RACK CATEGORY PRODUCTS

const rackProducts = [
  {
    id: 1,
    category: "RACKS",
    name: "Pallet Racks",
    productName: "Pallet Racks",
    images: [
      "/img/racks/1.png",
      "/img/racks/1.1.png",
      "/img/racks/1.2.png",
      "/img/racks/1.3.png",
      "/img/racks/1.4.png",
      "/img/racks/1.5.png",
    ],
    description: [
      `Pilco offers heavy-duty Pallet Racks designed to maximize
      warehouse storage space while ensuring safe, organized,
      and accessible storage. Engineered for strength, stability,
      and durability, our pallet racks accommodate different
      pallet sizes and load requirements. They are suitable for
      warehouses, distribution centers, factories, and
      industrial facilities.`,

      `Our warehouse pallet racks help businesses make better
      use of vertical storage space, improve inventory
      organization, and support efficient material handling.
      These racks provide easy access to stored goods while
      helping maintain an organized warehouse environment.`,

      `Pilco provides consultation and customized pallet
      racking layouts based on warehouse dimensions, available
      space, and storage requirements. Our team helps businesses
      select suitable storage configurations for efficient
      warehouse operations.`,
    ],
    specifications: [
      ["Brand", "Pilco"],
      ["Product", "Pallet Racks"],
      ["Category", "Racks"],
      ["Application", "Warehouse Storage"],
      ["Configuration", "Customized"],
      ["Load Capacity", "As per Approved Design"],
    ],
  },

  {
    id: 2,
    category: "RACKS",
    name: "Supermarket Racks",
    productName: "Supermarket Racks",
    images: [
      "/img/racks/2.png",
      "/img/racks/2.1.png",
      "/img/racks/2.2.png",
    ],
    description: [
      `Pilco offers Supermarket Racks designed to maximize
      storage space, improve product visibility, and create
      an organized shopping experience. Built for durability
      and everyday functionality, these racks provide
      practical display and storage solutions for
      supermarkets, retail stores, grocery shops,
      and convenience stores.`,

      `Our supermarket racks help retailers arrange products
      neatly, maintain accessible displays, and make efficient
      use of available retail space. Their functional design
      supports convenient product placement, easy restocking,
      and an organized store layout.`,

      `Pilco provides customized supermarket racking solutions
      according to store dimensions, product display
      requirements, and available space. Our racks are
      designed to support practical retail storage and
      better product presentation.`,
    ],
    specifications: [
      ["Brand", "Pilco"],
      ["Product", "Supermarket Racks"],
      ["Category", "Racks"],
      ["Application", "Retail & Supermarket Storage"],
      ["Configuration", "Customized"],
      ["Usage", "Product Display & Storage"],
    ],
  },

  {
    id: 3,
    category: "RACKS",
    name: "MS Slotted Angle Racks",
    productName: "MS Slotted Angle Racks",
    images: [
      "/img/racks/3.png",
      "/img/racks/3.1.png",
      "/img/racks/3.2.png",
    ],
    description: [
      `Pilco offers MS Slotted Angle Racks that provide
      versatile, durable, and cost-effective storage
      solutions for warehouses, factories, offices,
      retail stores, and industrial spaces. These racks
      are designed to make efficient use of available
      space while keeping stored goods organized
      and accessible.`,

      `Our MS Slotted Angle Racks feature adjustable
      shelving arrangements and a practical design
      that supports convenient assembly and flexible
      storage configurations. They are suitable for
      storing different types of materials according
      to shelving dimensions and load requirements.`,

      `Pilco provides customized MS Slotted Angle Racks
      based on available space, required shelving
      arrangements, and storage needs. These racks
      offer a practical solution for businesses
      looking for organized and adaptable storage
      systems.`,
    ],
    specifications: [
      ["Brand", "Pilco"],
      ["Product", "MS Slotted Angle Racks"],
      ["Category", "Racks"],
      ["Material", "Mild Steel"],
      ["Shelving", "Adjustable"],
      ["Configuration", "Customized"],
    ],
  },
];


// REUSABLE PRODUCT CARD
const RackProductCard = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);

  const {
    category,
    name,
    productName,
    images,
    description,
    specifications,
  } = product;

  const whatsappMessage = encodeURIComponent(
    `Hello Pilco, I want to enquire about ${productName}. Please share product specifications, pricing and availability.`
  );

  const specRows = [];

  for (let i = 0; i < specifications.length; i += 2) {
    specRows.push(specifications.slice(i, i + 2));
  }

  return (
    <section className="product-info-section py-3">
      <div className="container-xxl">

        <article className="product-card-section">

          <div className="row g-4 g-lg-5">

            {/* LEFT SIDE - PRODUCT IMAGES */}
            <div className="col-lg-5">

              <div className="product-main-image">
                <img
                  src={images[activeImage]}
                  alt={`${productName} - View ${activeImage + 1}`}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>

              {/* IMAGE THUMBNAILS */}
              {images.length > 1 && (
                <div className="product-thumbnails">

                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`product-thumbnail ${activeImage === index ? "active" : ""
                        }`}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View ${productName} image ${index + 1}`}
                      aria-pressed={activeImage === index}
                    >
                      <img
                        src={image}
                        alt={`${productName} thumbnail ${index + 1}`}
                        loading="lazy"
                      />
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* RIGHT SIDE - PRODUCT INFORMATION */}
            <div className="col-lg-7">

              <div className="product-info">

                {/* CATEGORY */}
                <div className="product-category-label top-head">
                  {category}
                </div>

                {/* PRODUCT NAME WITH MANUFACTURER IN DELHI */}
                <h2 className="product-title">
                  {name}
                </h2>

                {/* PRODUCT DESCRIPTION */}
                {description.map((paragraph, index) => (
                  <p
                    className="product-short-description"
                    key={index}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* PRODUCT SPECIFICATIONS */}
                <h3 className="specification-heading d-none">
                  Product Specifications
                </h3>

                <div className="specifications-table-wrapper d-none">

                  <table className="product-specifications">
                    <tbody>
                      {specRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>

                          {row.map(([label, value], index) => (
                            <React.Fragment key={index}>
                              <th scope="row">{label}</th>
                              <td>{value}</td>
                            </React.Fragment>
                          ))}

                          {row.length === 1 && (
                            <>
                              <th className="empty-spec"></th>
                              <td className="empty-spec"></td>
                            </>
                          )}

                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>

                {/* ENQUIRY BUTTONS */}
                <div className="product-action-buttons">

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
                  </a>

                </div>

              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
};

// MAIN RACKS CATEGORY PAGE
const Racks = () => {
  return (
    <>

      {/* BREADCRUMB */}
      <Breadcrumb title="Racks" />

      {/* CATEGORY INTRODUCTION */}
      <section className="category-page">
        <div className="container">

          <div className="category-intro text-center mt-5">

            <h1 className="heading">
              Racks Manufacturer in Delhi
            </h1>

            <p className="category-description text-center">
              Pilco is a Racks Manufacturer in Delhi,
              providing strong, durable, and customizable
              storage racks designed for efficient
              warehouse organization and better use of
              available space. Our industrial storage
              racks help businesses maximize storage
              capacity, maintain organized inventory,
              and improve accessibility to stored
              materials.
            </p>

            <p className="category-description text-center">
              Pilco offers a wide range of durable and customizable
              storage racks, including Pallet Racks, Supermarket Racks,
              and MS Slotted Angle Racks. Our racking solutions are
              designed to maximize storage capacity, improve space
              utilization, and ensure easy access to stored goods.
              Suitable for warehouses, factories, supermarkets,
              retail stores, and industrial facilities, these racks
              provide reliable storage and efficient organization.
              We also offer customized designs based on available
              space, load requirements, and specific storage needs.
            </p>

          </div>

        </div>
      </section>

      {/* RACK CATEGORY PRODUCT CARDS */}
      {rackProducts.map((product) => (
        <React.Fragment key={product.id}>
          <RackProductCard product={product} />
          <hr />
        </React.Fragment>
      ))}

    </>
  );
};

export default Racks;
