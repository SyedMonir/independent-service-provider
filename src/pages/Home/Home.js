import React from 'react';
import Testimonials from './Testimonials/Testimonials';
import ContactUs from './ContactUs/ContactUs';
import HeroSection from './HeroSection/HeroSection';
import ServicesHalf from './ServicesHalf/ServicesHalf';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesHalf />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
