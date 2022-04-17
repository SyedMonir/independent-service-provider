import React from 'react';
import useService from '../../hooks/useService';
import Service from '../SharedPage/Service';
import Spinner from '../SharedPage/Spinner';

const Services = () => {
  const [services, spinner] = useService();
  return (
    <div>
      <h1 className="text-center my-8 text-3xl text-white uppercase tracking-wider">
        Checkout my services
      </h1>
      {spinner ? (
        <Spinner />
      ) : (
        <section
          id="services"
          className="w-11/12 mx-auto my-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </section>
      )}
    </div>
  );
};

export default Services;
