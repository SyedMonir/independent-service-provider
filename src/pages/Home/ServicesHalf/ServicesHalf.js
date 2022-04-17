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
        <section
          id="services"
          className="w-11/12 mx-auto my-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </section>
      )}
    </>
  );
};

export default ServicesHalf;
