import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { CartProvider } from './components/CartContext'; 
import CheckoutPage from './pages/CheckoutPage'; 
import './App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <Router>
      <CartProvider> 
        <div className="app">
          <Navbar 
            onCartClick={handleCartClick} 
          />
          <Sidebar isOpen={cartOpen} onClose={handleCartClick} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
