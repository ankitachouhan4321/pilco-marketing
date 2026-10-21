import React from "react";

const ProductSearch = ({ value = "", onChange }) => {
  return (
    <div className="product-search-wrapper">
      <div className="product-search-box">
        <span style={{ color: "red", fontSize: "20px" }}>⌕</span>

        <input
          type="search"
          placeholder="Search product by name..."
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductSearch;
