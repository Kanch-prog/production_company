import React from 'react';
import { useCart } from './CartContext';
import './Sidebar.css';
import CartItem from './CartItem';

const Sidebar = ({ isOpen, onClose }) => {
  const { cart, checkout } = useCart(); 

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>Close</button>
      <div className="sidebar-content">
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <div className="cart-items">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
            <div className="total">
              <p>Total: ${total.toFixed(2)}</p>
            </div>
            <button className="checkout-btn" onClick={checkout}>Checkout</button> {/* Call checkout function */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
