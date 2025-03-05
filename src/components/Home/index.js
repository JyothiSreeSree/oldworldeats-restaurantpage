// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Home = () => {
  return (
    <div>
      {/* Header */}
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

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <div className="slide" style={{ backgroundImage: 'url(traditional.jpg)' }}></div>
          <Carousel.Caption>
            <h2>Taste the Traditional</h2>
            <div className="buttons">
              <button><Link to="#second-section">ORDER NOW</Link></button>
              <button><Link to="/services">RESERVATION</Link></button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items here */}
      </Carousel>

      {/* Categories */}
      <div className="second-section" id="second-section">
        <h4>CATEGORIES</h4>
        <div className="section-top">
          <div className="container1">
            <div className="box">
              <img src="break.png" alt="Breakfast" />
            </div>
            <div className="text1">
              <Link to="/breakfast">
                <h5>Breakfast & Brunch</h5>
              </Link>
              <h6>Energy For The Day</h6>
            </div>
          </div>
          {/* Add more categories here */}
        </div>
      </div>

      {/* Services */}
      <div className="service-section">
        <h2>Our Services</h2>
        <div className="service-top">
          <div className="box1">
            <img src="chef.png" alt="Master Chefs" />
            <h3>Master Chefs</h3>
          </div>
          {/* Add more services here */}
        </div>
      </div>

      {/* Reviews */}
      <div className="third-section">
        <h3>Our Customer <span id="review">Review</span></h3>
        <div className="third-top">
          <div className="box2">
            <img src="Bharathwaj.jpg" alt="Bharathwaj" />
            <div className="images">
              {[...Array(5)].map((_, i) => (
                <img key={i} src="star.png" alt="star" />
              ))}
            </div>
            <h5>Food is very Delicious...ambience is great and the staff is very friendly.</h5>
            <p>Bharathwaj</p>
          </div>
          {/* Add more reviews here */}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-top">
          <h5>Powered by Oldworldeats.com</h5>
        </div>
        <div className="left-right">
          <div className="footer-left">
            <h3><i>Follow Us</i></h3>
            <div className="social-menu">
              <ul>
                <li><a href="https://www.instagram.com/Oldworldeats" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://wa.me/910010226011" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
              </ul>
            </div>
            <h4>&copy; All rights reserved 2024.</h4>
          </div>
          <div className="footer-mid">
            <h3><i>Openings</i></h3>
            <p>24/7</p>
            <p>Our services available</p>
          </div>
          <div className="footer-right">
            <h3><i>Contacts</i></h3>
            <p>Mobile.No: 911000123011</p>
            <p>WhatsApp.No: 911000723457</p>
            <p>Email: Oldworldeatssupport@gmail.com</p>
          </div>
        </div>
        <div className="bottom">
          <h3><div behavior="slide" direction="down" style={{ color: 'orange', fontWeight: 'bold' }}>THANK YOU FOR VISITING OUR PAGE</div></h3>
        </div>
      </div>
    </div>
  );
};

export default Home;