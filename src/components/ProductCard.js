import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart(product); // Call addToCart with the product when button is clicked
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} className="product-image" />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCartClick}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;