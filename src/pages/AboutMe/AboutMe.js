import React from 'react';
import logo from '../../images/syed-monir.png';

const AboutMe = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="Syed Monir"
          src={logo}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Syed Monirul Alam
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Assalamualaikum! My goal is to be a Fullstack developer. When I
            started learning the basic parts of web-development that time I fell
            in love with programming. Then I started learning in-depth but I got
            stuck so many times that's why I started a professional course. And
            side by side I practice more and more it helps me so much to do
            projects and now I have gained skills on the frontend and now I am
            learning backend. I hope I will be a professional full-stack
            developer very soon on the Almighty of Allah!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
