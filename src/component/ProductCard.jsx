import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  const images = product.images || [];
  const currentImage = images[activeImage];

  const enquiryMessage = encodeURIComponent(
    `Hello, I am interested in ${product.name}${
      product.model ? ` (Model: ${product.model})` : ""
    }. Please share more details.`,
  );

  const whatsappNumber = (product.whatsapp || "").replace(/\D/g, "");

  const phoneNumber = (product.phone || "").replace(/[^\d+]/g, "");

  // Group specifications into two label/value pairs per row
  const specRows = [];

  for (let i = 0; i < product.specifications.length; i += 2) {
    specRows.push(product.specifications.slice(i, i + 2));
  }

  return (
    <>
    <article className="product-card-section">
      <div className="row g-4 g-lg-5">
        {/* LEFT: PRODUCT IMAGES */}
        <div className="col-lg-5">
          <div className="product-main-image">
            {currentImage ? (
              <img
                src={currentImage}
                alt={`${product.name} ${
                  product.model || ""
                } - Image ${activeImage + 1}`}
                loading="lazy"
              />
            ) : (
              <span>No image available</span>
            )}
          </div>

          {images.length > 1 && (
            <div className="product-thumbnails">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  className={`product-thumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1} of ${product.name}`}
                  aria-pressed={activeImage === index}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: PRODUCT INFORMATION */}
        <div className="col-lg-7">
          <div className="product-info">
            <div className="product-category-label top-head">
              {product.categoryLabel}
            </div>

            <h2 className="product-title">{product.name}</h2>

            {product.model && (
              <p className="product-model">
                Model: <strong>{product.model}</strong>
              </p>
            )}
            {/* PRODUCT DESCRIPTION */}
            {product.description && (
              <p className="product-short-description">
                {product.description}
              </p>
            )}

            <h3 className="specification-heading">Product Specifications</h3>

            <div className="specifications-table-wrapper">
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

           

            <div className="product-action-buttons">
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${enquiryMessage}`}
                  className="product-enquiry-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquiry Now ↗
                </a>
              )}

              {phoneNumber && (
                <a href={`tel:${phoneNumber}`} className="product-call-btn">
                  Call Now
                </a>
              )}
            </div>
          </div>
        </div>
        </div> <hr />
    </article>
   
    </>
  );
}
