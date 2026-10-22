
import React, { useMemo, useState } from "react";

import Breadcrumb from "../component/Breadcrumb";
import ProductSearch from "../component/ProductSearch";
import ProductCard from "../component/ProductCard";

import { products } from "../data/products";

export default function CategoryPage({
  category,
  title,
  heading,
  description,
}) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = product.category === category;

      const searchableText = [
        product.name,
        product.model,
        product.categoryLabel,
        product.description,
        ...(product.specifications || []).flat(),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(keyword);
    });
  }, [search, category]);

  return (
    <>
      {/* BREADCRUMB START */}
      <Breadcrumb title={title} />
      {/* BREADCRUMB END */}

      <section className="category-page">
        <div className="container">

          {/* CATEGORY INTRODUCTION START */}
          <div className="category-intro text-center mt-5">
            <h1 className="heading">
              {heading || title}
            </h1>

            {description && (
              <p className="category-description text-center">
                {description}
              </p>
            )}
          </div>
          {/* CATEGORY INTRODUCTION END */}

          {/* PRODUCT SEARCH */}
          <ProductSearch
            value={search}
            onChange={setSearch}
          />

          {/* ALL PRODUCTS */}
          <div className="category-products-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className="product-not-found">
                <h3>No products found</h3>

                <p>
                  {search
                    ? `No products match "${search}".`
                    : "No products available in this category."}
                </p>

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
