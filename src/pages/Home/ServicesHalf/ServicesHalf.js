import React from 'react';
import useService from '../../../hooks/useService';
import Service from '../../SharedPage/Service';
import Spinner from '../../SharedPage/Spinner';

const ServicesHalf = () => {
  const [services, spinner] = useService();
  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <section id="featured-services" className="bg-black">
          <h1 className="text-center pt-8 pb-5  text-3xl text-white uppercase tracking-wider">
            Checkout my services
          </h1>
          <section
            id="services"
            className="w-11/12 mx-auto py-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default ServicesHalf;
