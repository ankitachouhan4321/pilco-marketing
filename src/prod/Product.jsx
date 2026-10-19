import React from 'react'

const Product = () => {
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
                <span>Our Products</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* breadcrumb start */}
    </>
  );
}

export default Product
