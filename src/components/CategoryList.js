import React from 'react';
import ProductCard from './ProductCard';
import './CategoryList.css';

const CategoryList = ({ categories, addToCart }) => {
  const categoryList = categories && categories.categories ? categories.categories : [];

  return (
    <div className="category-list">
      {categoryList.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.title}</h3>
          <div className="product-list">
            {category.products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;