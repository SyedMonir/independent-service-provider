import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  // console.log(service);
  const { id, name, image, price, description } = service;
  const navigate = useNavigate();
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
            <button
              onClick={() => navigate(`/checkout/${id}`)}
              className="btn bg-black"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
