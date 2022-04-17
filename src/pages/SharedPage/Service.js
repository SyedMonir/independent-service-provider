import React from 'react';

const Service = ({ service }) => {
  console.log(service);
  const { name, image, price, description } = service;
  return (
    <>
      <div className="card bg-base-300 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions items-center justify-end">
            <p>Cost: ${price}</p>
            <button className="btn bg-black">Go to checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
