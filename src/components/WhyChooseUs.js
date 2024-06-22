import React from 'react';
import AnimatedComponent from '../components/AnimatedComponent';
import './WhyChooseUs.css';
import why from "../images/why.PNG";

const WhyChooseUs = () => {
  return (
    <AnimatedComponent>
      <div className="why-choose-us">
      <img src={why} alt="Why Choose Us" className="why-image" />
      <div className="why-content">
        <h2>Why Choose Us</h2>
        <p>We provide top-notch rubber products with exceptional customer service. Learn more about why we are the best choice for your rubber manufacturing needs.</p>
        <button className="btn">Learn More</button>
      </div>
    </div>

    </AnimatedComponent>
    
  );
}

export default WhyChooseUs;
