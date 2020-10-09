import React from 'react';
import { githubIcon, instagramIcon } from '../images';

const Footer = () => {
  return (
    <footer className="footer full">
      <div>
        <a href="https://github.com/djonata-dias">
          <img src={instagramIcon} />
        </a>
        <a href="https://www.instagram.com/djosouzadias/">
          <img src={githubIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;