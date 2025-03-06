import React from 'react';
import './index.css'

const MainCourse = () => {
  // Function to handle adding items to the cart
  const handleOrder = (name, price) => {
    alert(`${name} added to cart!`);

    // Create an order object
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

  // Main course items data
  const mainCourses = [
    { id: 1, name: 'Samber Rice', price: 80, image: 'assets/images/main1.png' },
    { id: 2, name: 'Puttu-Kerela', price: 100, image: 'assets/images/main2.png' },
    { id: 3, name: 'Rawalpindi chole', price: 80, image: 'assets/images/main3.png' },
    { id: 4, name: 'Mushroom pulav', price: 120, image: 'assets/images/main4.png' },
    { id: 5, name: 'Cabbage Tomato Pachadi', price: 100, image: 'assets/images/main5.png' },
    { id: 6, name: 'Andhra Style Pindi Miriyam', price: 80, image: 'assets/images/main6.png' },
    { id: 7, name: 'Rajasthani Korma Roti', price: 150, image: 'assets/images/main7.png' },
    { id: 8, name: 'Pudina Tambuli', price: 150, image: 'assets/images/main8.png' },
    { id: 9, name: 'Gutti Vankaya-Andhra Style', price: 100, image: 'assets/images/main9.png' },
    { id: 10, name: 'Rajma Masala', price: 100, image: 'assets/images/main10.png' },
    { id: 11, name: 'Palak Chana Dal', price: 80, image: 'assets/images/main11.png' },
    { id: 12, name: 'Natu Kodi Pulusu', price: 80, image: 'assets/images/main12.png' },
    { id: 13, name: 'Malai Kofta', price: 150, image: 'assets/images/main13.jpeg' },
    { id: 14, name: 'Dal Makhani', price: 170, image: 'assets/images/Dal Makhani.jpeg' },
    { id: 15, name: 'Rogan josh', price: 200, image: 'assets/images/Rogan josh.jpeg' },
    { id: 16, name: 'palak-paneer', price: 110, image: 'assets/images/palak-paneer.jpg' },
    { id: 17, name: 'Murgh makhani', price: 250, image: 'assets/images/Murgh makhani.jpg' },
    { id: 18, name: 'Paneer tikka', price: 160, image: 'assets/images/Paneer tikka.jpg' },
  ];

  return (
    <div>
      {/* Main Course Items */}
      <div className="bb">
        {mainCourses.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <div className="images">
              {[...Array(5)].map((_, i) => (
                <img key={i} src="assets/images/star.png" alt="star" />
              ))}
              <p>&#8377;{item.price}</p>
            </div>
            <button onClick={() => handleOrder(item.name, item.price)}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCourse;