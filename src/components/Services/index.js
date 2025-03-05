import React from 'react';
import './index.css'

const About = () => {
  // Function to validate the reservation form
  const validateForm = () => {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    if (!date) {
      alert('Date must be filled out');
      return false;
    }
    if (!time) {
      alert('Time must be filled out');
      return false;
    }
    if (!people) {
      alert('Choose the number of people');
      return false;
    }

    alert('Successfully reserved a table!');
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar-section navbar-fixed-top" style={{ borderWidth: '2px', borderRadius: '35px' }}>
        <div className="nav-left">
          <img src="assets/images/logo.png" alt="logo" />
        </div>
        <div className="nav-mid">
          <ul>
            <li className="active"><a href="/">Home</a></li>
            <li>
              <div className="dropdown">
                <a href="#second-section">Menu</a>
                <div className="dropdown-content">
                  <a href="/breakfast">Breakfast</a>
                  <a href="/maincourse">MainCourse</a>
                  <a href="/deserts">Deserts</a>
                  <a href="/drinks">Drinks</a>
                </div>
              </div>
            </li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button><a href="/chatbot">Chatbot</a></button>
        </div>
      </nav>

      {/* About Section */}
      <div className="about-section" id="about-section">
        <div className="about-top">
          <div className="box1">
            <img src="assets/images/chef.png" alt="Master Chefs" />
            <h3>Master Chefs</h3>
            <p>Passionate about food and cooking</p>
          </div>
          <div className="box1">
            <img src="assets/images/soup.png" alt="Delicious Food" />
            <h3>Delicious Food</h3>
            <p>Food is flavorful, well prepared.</p>
          </div>
          <div className="box1">
            <img src="assets/images/checkout.png" alt="Online Order" />
            <h3>Online Order</h3>
            <p>Online orders available.</p>
          </div>
        </div>
        <div className="about-bottom">
          <div className="box1">
            <img src="assets/images/resturant.png" alt="Tasty Food" />
            <h3>Tasty Food</h3>
            <p>Tastes great, Yummy.</p>
          </div>
          <div className="box1">
            <img src="assets/images/spcial-tag.png" alt="Offers" />
            <h3>Offers</h3>
            <p>20% Offer available.</p>
          </div>
          <div className="box1">
            <img src="assets/images/24-7.png" alt="24/7 Service" />
            <h3>24/7 Service</h3>
            <p>24/7 our services available.</p>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="fourth-section">
        <div className="fourth-left">
          <img src="assets/images/food.delivery.png" alt="Order Online" />
          <h3>Order Online</h3>
          <h2>OUR DISHES ARE<br />ON YOUR WAY</h2>
          <div className="but-grp">
            <div className="but-grp1">
              <button id="button5"><a href="/breakfast">Breakfast & Brunch</a></button>
              <button id="button5"><a href="/maincourse">Maincourse</a></button>
            </div>
            <div className="but-grp2">
              <button id="button5"><a href="/deserts">Deserts</a></button>
              <button id="button5"><a href="/drinks">Drinks</a></button>
            </div>
          </div>
        </div>
        <div className="fourth-right">
          <h1>BRING Traditional TO YOUR TABLE</h1>
          <div className="box2">
            <h3>Make a reservation</h3>
            <form name="myForm">
              <input type="date" id="date" placeholder="20-June-2024" required />
              <input type="time" id="time" placeholder="7:00PM" required />
              <select name="People" id="people" required>
                <option value="">None</option>
                {[...Array(20)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} person{i + 1 > 1 ? 's' : ''}</option>
                ))}
              </select>
              <button id="button6" type="button" onClick={validateForm}>Reserve a table</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;