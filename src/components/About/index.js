import React from "react";
import "./index.css";

const About = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar-section navbar-fixed-top">
        <div className="nav-left">
          <img src="assets/images/logo.png" alt="Logo" />
        </div>
        <div className="nav-mid">
          <ul>
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <div className="dropdown">
                <a href="#kk">Menu</a>
                <div className="dropdown-content">
                  <a href="breakfast&brunch.html">Breakfast</a>
                  <a href="maincourse.html">MainCourse</a>
                  <a href="deserts.html">Deserts</a>
                  <a href="drinks.html">Drinks</a>
                </div>
              </div>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="cart.html">Cart</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <button>
            <a href="chatbot.html">Chatbot</a>
          </button>
        </div>
      </nav>

      {/* About Section */}
      <div className="third-section">
        <div className="third-left">
        <div className="text">
            <div className="slide-text">FRESH</div>
            <div className="slide-text">TASTY</div>
            <div className="slide-text">SIMPLE</div>
          </div>
          <h3>We’re bringing flavors from the Traditional to your plate</h3>
          <p>
            Authentic Traditional food is vibrant, delicious, fresh and fun. It
            is also colourful, spicy and uses an amazing array of chillies,
            both fresh and dried. Many ingredients are readily available
            everywhere, such as tomatoes, limes, coriander, red onion, corn,
            and specialty ingredients are becoming more readily available in
            India and elsewhere.
          </p>
        </div>
        <div className="third-right">
          <img src="assets/images/rest.jpeg" alt="Restaurant" />
        </div>
      </div>
    </div>
  );
};

export default About;
