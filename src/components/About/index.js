import React from "react";
import "./index.css";

const About = () => {
  return (
    <div>
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
