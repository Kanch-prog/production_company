import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';
import slide1 from '../images/slide1.PNG';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import AnimatedComponent from '../components/AnimatedComponent';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <AnimatedComponent>
      <Slider {...settings}>
      <div className="slide">
        <div className="slide-content">
          <div className="hero-content">
            <h1>Dream into a reality</h1>
            <p>Free designs to bring your kitchen to life</p>
            <button className="btn">Discover More</button>
          </div>
          <img src={slide1} alt="Slide 1" className="slide-image" />
        </div>
      </div>
      
      <div className="slide">
        <div className="slide-content">
          <div className="hero-content">
            <h1>Inspiration starts here</h1>
            <p>Infuse your personal flair</p>
            <button className="btn">Explore</button>
          </div>
          <img src={slide2} alt="Slide 2" className="slide-image" />
        </div>
      </div>
      
      <div className="slide">
        <div className="slide-content">
          <div className="hero-content">
            <h1>Up to 40% off</h1>
            <p>Free virtual design & delivery</p>
            <button className="btn">Learn More</button>
          </div>
          <img src={slide3} alt="Slide 3" className="slide-image" />
        </div>
      </div>
    </Slider>

    </AnimatedComponent>
    
  );
}

export default Hero;
