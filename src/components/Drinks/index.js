import React from 'react';
import './index.css'

const Drinks = () => {
  // Sample drinks data
  const drinks = [
    { id: 1, name: 'Watermelon Juice', price: 40, image: 'assets/images/drink1.jpg' },
    { id: 2, name: 'RagiJavva', price: 60, image: 'assets/images/drink2.jpg' },
    { id: 3, name: 'Cucumber Limeade', price: 40, image: 'assets/images/drink3.jpg' },
    { id: 4, name: 'Tulasi', price: 40, image: 'assets/images/drink4.jpg' },
    { id: 5, name: 'Lemon Juice', price: 50, image: 'assets/images/drink5.jpg' },
    { id: 6, name: 'lassi', price: 70, image: 'assets/images/drink7.jpg' },
    { id: 7, name: 'saunf sharbat', price: 50, image: 'assets/images/drink6.jpg' },
    { id: 8, name: 'Badam milk', price: 60, image: 'assets/images/drink9.jpg' },
    { id: 9, name: 'Sugarcane', price: 70, image: 'assets/images/drink11.jpg' },
    { id: 10, name: 'Mango Juice', price: 70, image: 'assets/images/drink8.jpg' },
    { id: 11, name: 'Pomegranate Juice', price: 50, image: 'assets/images/drink12.jpg' },
    { id: 12, name: 'LemonMint Juice', price: 50, image: 'assets/images/drink10.jpg' },
  ];

  // Function to handle order
  const handleOrder = (name, price) => {
    alert("Your order is added to cart");

    // Create an object to hold the order details
    const order = {
      name: name,
      price: price,
    };

    // Retrieve existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new order to the cart items
    cartItems.push(order);

    // Store the updated cart items back in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <nav className="navbar-section navbar-fixed-top" style={{ borderWidth: '2px', borderRadius: '35px' }}>
          <div className="nav-left">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="nav-mid">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li>
                <a href="#second-section">
                  <div className="dropdown">
                    Menu
                    <div id="myDropdown" className="dropdown-content">
                      <a href="breakfast&brunch.html">Breakfast</a>
                      <a href="maincourse.html">MainCourse</a>
                      <a href="deserts.html">Deserts</a>
                      <a href="drinks.html">Drinks</a>
                    </div>
                  </div>
                </a>
              </li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="cart.html">Cart</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </div>
          <div className="nav-right">
            <button><a href="chatbot.html">Chatbot</a></button>
          </div>
        </nav>
      </header>

      {/* Drinks Section */}
      <div className="bb">
        {drinks.map((drink) => (
          <div className="box" key={drink.id}>
            <img src={drink.image} alt={drink.name} />
            <h4>{drink.name}</h4>
            <div className="images">
              {[...Array(5)].map((_, i) => (
                <img key={i} src="star.png" alt="star" />
              ))}
              <p>&#8377;{drink.price}</p>
            </div>
            <button onClick={() => handleOrder(drink.name, drink.price)}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;