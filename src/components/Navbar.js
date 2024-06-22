import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AnimatedComponent from '../components/AnimatedComponent';
import { useCart } from './CartContext'; 
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = ({ onSearchSubmit, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { cart } = useCart(); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  const handleLogin = () => {
    // Hardcoded login logic for demonstration
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setSidebarOpen(false); // Close sidebar on successful login
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSidebarOpen(false); // Close sidebar on logout
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AnimatedComponent>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Company Logo" className="logo" />
          <Link to="/" className="company-name">AluCrafters</Link>
        </div>
        <div className="navbar-center">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        <div className="navbar-right">
          <Link to="/industries" className="nav-link">Industries</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          {isLoggedIn ? (
            <div className="nav-dropdown" onClick={toggleSidebar}>
              <button className="nav-icon-button">
                <FontAwesomeIcon icon={faUser} />
              </button>
              <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>Close</button>
                <div className="sidebar-content">
                  <span>Welcome, User!</span>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="nav-dropdown" onClick={toggleSidebar}>
              <button className="nav-icon-button">
                <FontAwesomeIcon icon={faUser} />
              </button>
              <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>Close</button>
                <div className="sidebar-content">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="dropdown-input"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="dropdown-input"
                  />
                  <button onClick={handleLogin}>Login</button>
                </div>
              </div>
            </div>
          )}
          <button className="nav-icon-button" onClick={onCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
        </div>
      </nav>
    </AnimatedComponent>
  );
}

export default Navbar;
