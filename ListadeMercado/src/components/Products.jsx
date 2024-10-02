import React from "react";
import "./Products.css";

function Products() {
  const products = [
    { id: 1, name: "Maça", price: "R$1" },
    { id: 2, name: "abacaxi", price: "R$2" },
    { id: 3, name: "Pão", price: "R$1.5" },
  ];

  return (
    <div className="products">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
