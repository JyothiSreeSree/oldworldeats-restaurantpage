import React, { useState } from "react";
import "./index.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      alert("All fields must be filled out");
      return;
    }
    alert("Successfully Sent");
  };

  return (
    <>
      <nav className="navbar-section navbar-fixed-top" style={{ borderWidth: "2px", borderRadius: "35px" }}>
        <div className="nav-left">
          <img src="assets/images/logo.png" alt="Logo" />
        </div>
        <div className="nav-mid">
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li>
              <div className="dropdown">
                <a href="#second-section">Menu</a>
                <div className="dropdown-content">
                  <a href="breakfast&brunch.html">Breakfast</a>
                  <a href="maincourse.html">Main Course</a>
                  <a href="deserts.html">Desserts</a>
                  <a href="drinks.html">Drinks</a>
                </div>
              </div>
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
      
      <form className="ContactUs" onSubmit={validateForm}>
        <div className="contact-left">
          <h1 style={{ color: "rgba(246, 13, 13, 0.947)", textAlign: "center" }}>Contact Us</h1>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />
          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />
          <label>Write a Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required /><br /><br />
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
