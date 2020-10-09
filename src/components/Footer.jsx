import React from 'react';
import { githubIcon, instagramIcon, likedinIcon } from '../images';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer full">
      <div>
        <a
          href="https://github.com/djonata-dias"
          target="_blank"
          rel="noopener noreferrer">
          <img src={githubIcon} alt="Icone do GitHub" width="50px" />
        </a>
        <a
          href="https://www.linkedin.com/in/djonata-dias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={likedinIcon} alt="Icone do Linkedin" width="30px" />
        </a>
        <a
          href="https://www.instagram.com/djosouzadias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Icone do Instagram" width="55px" />
        </a>
      </div>
      <h5 id="copyright">Copyright © 2019-2020 Djonata de Souza Dias. Todos os direitos reservados</h5>
    </footer>
  );
};

export default Footer;
