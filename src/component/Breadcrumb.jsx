import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <section id="breadcrumb" className="pilco-breadcrumb-section">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pilco-breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="fa-solid fa-house me-2"></i>
                Home
              </Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              <span>{title}</span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
