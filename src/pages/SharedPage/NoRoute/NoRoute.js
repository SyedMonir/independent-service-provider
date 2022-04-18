import React from 'react';
import { Link } from 'react-router-dom';
import './NoRoute.css';

const NoRoute = () => {
  return (
    <>
      <section className="page_404 text-slate-700">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="four_zero_four_bg py-4">
              <h1 className="text-center text-black">404</h1>
            </div>

            <div className="content_box_404">
              <h3 className="h2">Look like you're lost</h3>

              <p>the page you are looking for not available!</p>

              <Link to="/" className="link_404">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoRoute;
