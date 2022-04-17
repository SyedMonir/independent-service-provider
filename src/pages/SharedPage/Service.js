import React from 'react';

const Service = ({ service }) => {
  console.log(service);
  const { name, Price, description } = service;
  return <>{name}</>;
};

export default Service;
