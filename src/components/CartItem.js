import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
  return (
    <tr className="cart-item">
      <td><img src={item.imageUrl} alt={item.title} className="item-image" /></td>
      <td>{item.title}</td>
      <td>${item.price.toFixed(2)}</td>
    </tr>
  );
}

export default CartItem;
