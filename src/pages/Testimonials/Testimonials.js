import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-20 mx-auto">
        <h3 className="text-3xl  font-medium title-font text-white mb-4 text-center">
          Testimonials
        </h3>
        <h2 className="text-3xl uppercase font-medium title-font text-white mb-12 text-center">
          Clients Feedback
        </h2>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <FaQuoteRight className="block w-5 h-5 text-gray-500 mb-4" />
              <p className="leading-relaxed mb-6">
                Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing. Tacos
                pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
                authentic iceland.
              </p>
              <a href="/" className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/106x106"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    Holden Caulfield
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <FaQuoteRight className="block w-5 h-5 text-gray-500 mb-4" />
              <p class="leading-relaxed mb-6">
                Photography is a way of feeling, of touching, of loving. What
                you have caught on film is captured forever... it remembers
                little things after have forgotten everything. Photography
                powerful medium expression and communications, offers an
                infinite variety of perception, interpretation.
              </p>
              <a href="/" class="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/107x107"
                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-white">
                    Alper Kamu
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
