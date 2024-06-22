import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import WhyChooseUs from '../components/WhyChooseUs';
import News from '../components/News';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Solutions />
      <WhyChooseUs />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
