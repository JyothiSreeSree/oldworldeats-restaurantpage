import React from 'react';
import './index.css'

const Desserts = () => {
  const desserts = [
    { id: 1, name: 'Kobbari Burrelu', price: 70, image: 'assets/images/desert12.png' },
    { id: 2, name: 'Sooji laddu', price: 70, image: 'assets/images/desert13.png' },
    { id: 3, name: 'Mysore pak', price: 50, image: 'assets/images/desert2.png' },
    { id: 4, name: 'Dryfruit Putarekulu', price: 100, image: 'assets/images/desert6.png' },
    { id: 5, name: 'Gavalu', price: 70, image: 'assets/images/desert5.png' },
    { id: 6, name: 'Kalajamun', price: 50, image: 'assets/images/desert1.png' },
    { id: 7, name: 'Kobari Burrelu', price: 50, image: 'assets/images/desert12.png' },
    { id: 8, name: 'Kaja puri', price: 70, image: 'assets/images/desert3.png' },
    { id: 9, name: 'Raav Keasri', price: 100, image: 'assets/images/desert4.jpg' },
    { id: 10, name: 'Basbousa-Egypt', price: 50, image: 'assets/images/desert7.png' },
    { id: 11, name: 'Coconut Barfi', price: 60, image: 'assets/images/desert8.png' },
    { id: 12, name: 'Cardamom Buns-sweden', price: 70, image: 'assets/images/desert9.png' },
    { id: 13, name: 'Kashata-EastAfrica', price: 60, image: 'assets/images/desert10.png' },
    { id: 14, name: 'Saffron IceCream-Iran', price: 100, image: 'assets/images/desert11.png' },
    { id: 15, name: 'Ravva Laddu', price: 50, image: 'assets/images/desert14.png' },
  ];

  // Function to handle order
  const handleOrder = (name, price) => {
    alert("Your order is added to cart");

    // Create an object to hold the order details
    const order = {
      name: name,
      price: price
    };

    // Retrieve existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new order to the cart items
    cartItems.push(order);

    // Store the updated cart items back in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div className="bb">
      {desserts.map((dessert) => (
        <div className="box" key={dessert.id}>
          <img src={dessert.image} alt={dessert.name} />
          <h4>{dessert.name}</h4>
          <div className="images">
            {[...Array(5)].map((_, i) => (
              <img key={i} src="assets/images/star.png" alt="star" />
            ))}
            <p>&#8377;{dessert.price}</p>
          </div>
          <button onClick={() => handleOrder(dessert.name, dessert.price)}>Order Now</button>
        </div>
      ))}
    </div>
  );
};

export default Desserts;