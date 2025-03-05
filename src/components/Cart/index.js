import React, { useState, useEffect } from "react";
import './index.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemCounts = storedCart.reduce((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});
    setCartItems(itemCounts);
  }, []);

  useEffect(() => {
    const cartArray = Object.keys(cartItems).flatMap((name) =>
      Array(cartItems[name]).fill({ name })
    );
    localStorage.setItem("cartItems", JSON.stringify(cartArray));
  }, [cartItems]);

  const incrementCount = (itemName) => {
    setCartItems((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1,
    }));
  };

  const decrementCount = (itemName) => {
    setCartItems((prev) => {
      if (prev[itemName] === 1) {
        const { [itemName]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemName]: prev[itemName] - 1 };
    });
  };

  const emptyCart = () => {
    setCartItems({});
    localStorage.removeItem("cartItems");
  };

  const confirmOrder = () => {
    if (Object.keys(cartItems).length === 0) {
      alert("Please add at least one item to the cart.");
      return;
    }
    alert("Your order has been confirmed!");
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {Object.keys(cartItems).length > 0 ? (
          Object.entries(cartItems).map(([itemName, count]) => (
            <div key={itemName}>
              {itemName} - 
              <button onClick={() => decrementCount(itemName)}>-</button> 
              <span>{count}</span> 
              <button onClick={() => incrementCount(itemName)}>+</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <button onClick={emptyCart}>Empty Cart</button>
      <button onClick={confirmOrder}>Confirm Order</button>
    </div>
  );
};

export default Cart;
