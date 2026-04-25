import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {
        products.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
