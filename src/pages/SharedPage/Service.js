import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  // console.log(service);
  const { id, name, image, price, description } = service;
  const navigate = useNavigate();
  return (
    <>
      <div className="animate__animated animate__fadeInUp card card-side bg-[#2a303c] shadow-xl">
        <figure
          className="cursor-pointer"
          onClick={() => navigate(`/service-details/${id}`)}
        >
          <img src={image} alt={name} height={'100%'} />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-white">{name}</h2>
          <p className="text-base text-justify" title={description}>
            {description.slice(0, 65) + ' .. '}{' '}
            <small
              onClick={() => navigate(`/service-details/${id}`)}
              className="underline cursor-pointer"
            >
              {' '}
              read more
            </small>
          </p>
          <div className="card-actions justify-end">
            <p className="text-white">Cost: ${price}</p>
            <button
              onClick={() => navigate(`/checkout/${id}`)}
              className="btn bg-black"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
      {/* <div className="card bg-base-300 shadow-xl h-3/4">
        <figure className="h-3/4">
          <img className="h-3/4" src={image} alt={name} />
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
      </div> */}
    </>
  );
};

export default Service;
