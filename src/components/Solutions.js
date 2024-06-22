import React from 'react';
import './Solutions.css';
import solutionImage from '../images/solution.PNG'; 
import manufacturingImage from '../images/solution_1.PNG'; 
import qualityControlImage from '../images/solution_2.PNG';
import customizationImage from '../images/solution_3.PNG';
import customerServiceImage from '../images/solution_4.PNG';
import AnimatedComponent from '../components/AnimatedComponent';

const Solutions = () => {
  return (
    <AnimatedComponent>
      <div className="solutions">
      <div className="solution-intro">
        <img src={solutionImage} alt="Solutions" className="solution-image" />
        <div className="solution-text">
          <h2>Our Solutions</h2>
          <p>We offer a wide range of rubber products designed to meet your needs.</p>
        </div>
      </div>
      <div className="solution-list">
        <div className="solution-item">
          <img src={manufacturingImage} alt="Manufacturing" className="solution-item-image" />
          <div>Efficient Manufacturing Processes</div>
        </div>
        <div className="solution-item">
          <img src={qualityControlImage} alt="Quality Control" className="solution-item-image" />
          <div>Quality Control and Assurance</div>
        </div>
        <div className="solution-item">
          <img src={customizationImage} alt="Customization" className="solution-item-image" />
          <div>Customization and Flexibility</div>
        </div>
        <div className="solution-item">
          <img src={customerServiceImage} alt="Customer Service" className="solution-item-image" />
          <div>Customer Service and Support</div>
        </div>
      </div>
    </div>

    </AnimatedComponent>
    
  );
}

export default Solutions;
