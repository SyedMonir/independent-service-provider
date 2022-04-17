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
        services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))
      )}
    </>
  );
};

export default ServicesHalf;
