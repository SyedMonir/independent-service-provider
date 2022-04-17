import React from 'react';
import Testimonials from '../Testimonials/Testimonials';
import HeroSection from './HeroSection/HeroSection';
import ServicesHalf from './ServicesHalf/ServicesHalf';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesHalf />
      <Testimonials />
    </>
  );
};

export default Home;
