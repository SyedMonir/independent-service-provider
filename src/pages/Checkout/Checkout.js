import React from 'react';
import { useParams } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import useService from '../../hooks/useService';
import Spinner from '../SharedPage/Spinner';

const Checkout = () => {
  const { serviceId } = useParams();
  const [services, spinner] = useService();
  const selectedService = services.find((service) => service.id === +serviceId);
  console.log(selectedService);
  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <section>
          <div className="mt-10">
            <h2 className="flex items-center justify-center font-bold text-white text-md lg:text-3xl">
              Please provide your shipping address
            </h2>
          </div>
          <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
              <div className="flex flex-col md:w-full">
                <h2 className="mb-4 font-bold md:text-xl text-heading ">
                  Shipping Address
                </h2>
                <form className="justify-center w-full mx-auto">
                  <div className="">
                    <div className="space-x-0 lg:flex lg:space-x-4">
                      <div className="w-full lg:w-1/2">
                        <label
                          htmlFor="firstName"
                          className="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          First Name
                        </label>
                        <input
                          name="firstName"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div className="w-full lg:w-1/2 ">
                        <label
                          htmlFor="LastName"
                          className="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Last Name
                        </label>
                        <input
                          name="LastName"
                          id="LastName"
                          type="text"
                          placeholder="Last Name"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full">
                        <label
                          htmlFor="email"
                          className="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Email
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="text"
                          placeholder="Email"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full">
                        <label
                          htmlFor="number"
                          className="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Number
                        </label>
                        <input
                          name="number"
                          id="number"
                          type="number"
                          placeholder="Number"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full">
                        <label
                          htmlFor="Address"
                          className="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Address
                        </label>
                        <textarea
                          className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                          name="Address"
                          id="Address"
                          cols="20"
                          rows="4"
                          placeholder="Address"
                        ></textarea>
                      </div>
                    </div>
                    <div className="space-x-0 lg:flex lg:space-x-4">
                      <div className="w-full lg:w-1/2">
                        <label
                          htmlFor="city"
                          className="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          City
                        </label>
                        <input
                          name="city"
                          id="city"
                          type="text"
                          placeholder="City"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                      <div className="w-full lg:w-1/2 ">
                        <label
                          htmlFor="postcode"
                          className="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Postcode
                        </label>
                        <input
                          name="postcode"
                          id="postcode"
                          type="text"
                          placeholder="Post Code"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="mt-4 mb-10">
                      <button className="w-full px-6 py-2 text-blue-200 bg-black hover:bg-gray-900">
                        Process
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                <div className="pt-12 md:pt-0 2xl:ps-4">
                  <h2 className="text-xl font-bold">Order Summary</h2>
                  <div className="mt-8">
                    <div className="flex flex-col space-y-4">
                      <div className="flex space-x-4">
                        <div>
                          <img
                            src={selectedService?.image}
                            alt=""
                            className="w-60"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white">
                            {selectedService?.name}
                          </h2>
                          <p className="text-sm">
                            {selectedService?.description.slice(0, 30)}
                          </p>
                          <span className="text-white">
                            Cost: $ {selectedService?.price}{' '}
                          </span>
                        </div>
                        <div>
                          <GrFormClose />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-4 mt-4">
                    <h2 className="text-xl font-bold">Totals</h2>
                  </div>
                  <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Cost<span className="ml-2">$ {selectedService?.price}</span>
                  </div>
                  <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Shipping Tax<span className="ml-2">$10</span>
                  </div>
                  <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                    Total
                    <span className="ml-2">
                      $ {selectedService?.price + 10}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Checkout;
