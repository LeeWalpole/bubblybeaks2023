import React from "react";

function Product({ product, handleFavoriteSelection, favorites }) {
  return (
    <article key={product.id} className="product">
      <h6 className="product-title">{product.title}</h6>
    </article>
  );
}

export default Product;
