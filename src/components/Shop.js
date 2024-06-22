import React from 'react';
import CategoryList from './CategoryList';
import { useCart } from './CartContext'; 
import './Shop.css';
import categories from '../files/products.json';

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="shop">
      <h1>Shop</h1>
      <CategoryList categories={categories} addToCart={addToCart} />
    </div>
  );
}

export default Shop;