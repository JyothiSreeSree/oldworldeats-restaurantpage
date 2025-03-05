import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Header = () => {
  return (
    <header>
        <nav className="navbar-section navbar-fixed-top" style={{ borderWidth: '2px', borderRadius: '35px' }}>
          <div className="nav-left">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="nav-mid">
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              <li>
                <div className="dropdown">
                  <Link to="">Menu</Link>
                  <div className="dropdown-content">
                    <Link to="/breakfast">Breakfast</Link>
                    <Link to="/maincourse">MainCourse</Link>
                    <Link to="/deserts">Desserts</Link>
                    <Link to="/drinks">Drinks</Link>
                  </div>
                </div>
              </li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="nav-right">
            <button><Link to="/chatbot">Chatbot</Link></button>
          </div>
        </nav>
      </header>
  )
}

export default Header
