
import React, { useState } from "react";

const ProductInfoCard = () => {
    const [activeImage, setActiveImage] = useState(0);

    // ADD YOUR PRODUCT IMAGES HERE
    const images = [
        "/img/brand/1.png",
        "/img/brand/2.png",
    ];

    // ADD SPECIFICATIONS HERE
    const specifications = [
        ["Brand", "Prisana"],
        ["Product", "Windscreen Wash Fluid"],
        ["Category", "Glass Care"],
        ["Product Type", "Concentrated Cleaner"],
        ["Pack Size", "50 ml"],
        ["Application", "Windshield Cleaning"],
    ];

    const productName = "Windscreen Wash Fluid";

    const whatsappNumber = "919999773525";
    const phoneNumber = "+919999773525";

    const whatsappMessage = encodeURIComponent(
        `Hello Prisana, I want to enquire about ${productName}. Please share more details.`
    );

    const specRows = [];

    for (let i = 0; i < specifications.length; i += 2) {
        specRows.push(specifications.slice(i, i + 2));
    }

    return (
        <section className="product-info-section py-5">
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
                                />

                            </div>

                            {/* THUMBNAILS */}
                            {images.length > 1 && (
                                <div className="product-thumbnails">

                                    {images.map((image, index) => (
                                        <button
                                            type="button"
                                            key={index}
                                            className={`product-thumbnail ${activeImage === index ? "active" : ""
                                                }`}
                                            onClick={() => setActiveImage(index)}
                                            aria-label={`View image ${index + 1}`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${productName} thumbnail ${index + 1}`}
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
                                    GLASS CARE
                                </div>

                                {/* PRODUCT NAME */}
                                <h2 className="product-title">
                                    Windscreen Wash Fluid
                                </h2>

                                {/* PRODUCT DESCRIPTION */}
                                <p className="product-short-description">
                                    Prisana Windscreen Wash Fluid is a
                                    high-performance concentrated cleaner that
                                    helps remove dust, dirt, and pollution film
                                    from the windshield, providing clear,
                                    streak-free visibility.
                                </p>

                                {/* SPECIFICATIONS */}
                                <h3 className="specification-heading">
                                    Product Specifications
                                </h3>

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

                                {/* ENQUIRY BUTTONS */}
                                <div className="product-action-buttons">

                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="product-enquiry-btn"
                                    >
                                        Enquire Now ↗
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

export default ProductInfoCard;
