import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-white">
        <div>
          <h2 className="text-4xl tracking-[.3rem]">
            theSyed <br /> Wild Photographer
          </h2>
          <p className="text-sm">
            <br />
            Providing service tech since 2021
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to={''} className="link link-hover">
            Branding
          </Link>
          <Link to={''} className="link link-hover">
            Design
          </Link>
          <Link to={''} className="link link-hover">
            Marketing
          </Link>
          <Link to={''} className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to={''} className="link link-hover">
            About us
          </Link>
          <Link to={''} className="link link-hover">
            Contact
          </Link>
          <Link to={''} className="link link-hover">
            Jobs
          </Link>
          <Link to={''} className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to={''} className="link link-hover">
            Terms of use
          </Link>
          <Link to={''} className="link link-hover">
            Privacy policy
          </Link>
          <Link to={''} className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>

      <footer className="footer footer-center p-10 bg-black text-white rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/syed-monirul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={'25px'} />
            </a>
            <a
              href="https://github.com/SyedMonir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={'25px'} />
            </a>
            <a
              href="https://www.facebook.com/SyedMoonir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={'25px'} />
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © 2022 - All right reserved by theSyed Wild Photographer
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
