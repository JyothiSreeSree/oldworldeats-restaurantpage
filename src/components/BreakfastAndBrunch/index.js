import React from "react";
import "./index.css"; 

const menuItems = [
  { name: "Ragi Idly", price: 50, image: "assets/images/break1.jpg" },
  { name: "Jonna Roti", price: 60, image: "assets/images/break2.jpg" },
  { name: "SarvaPindi", price: 50, image: "assets/images/break3.png" },
  { name: "Dhokla", price: 55, image: "assets/images/break8.png" },
  { name: "Pongal", price: 50, image: "assets/images/break4.png" },
  { name: "Poha", price: 50, image: "assets/images/break5.png" },
  { name: "Moong Dal Chilla", price: 40, image: "assets/images/break6.png" },
  { name: "Punugulu", price: 40, image: "assets/images/break7.png" },
  { name: "Semiya Upma", price: 30, image: "assets/images/break10.png" },
];

const BreakfastAndBrunch = () => {
  const handleOrder = (name, price) => {
    alert("Your order is added to cart");
    
    const order = { name, price };
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(order);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div className="bb">
      {menuItems.map((item, index) => (
        <div className="box" key={index}>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <div className="images">
            {[...Array(5)].map((_, i) => (
              <img key={i} src="assets/images/star.png" alt="star" />
            ))}
            <p>&#8377;{item.price}</p>
          </div>
          <button onClick={() => handleOrder(item.name, item.price)}>
            Order Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default BreakfastAndBrunch;
