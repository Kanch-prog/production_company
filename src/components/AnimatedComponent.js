import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AnimatedComponent.css';

const AnimatedComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when element comes into view
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <div ref={ref} className={`animated-component ${inView ? 'visible' : 'hidden'}`}>
      {children}
    </div>
  );
}

export default AnimatedComponent;
