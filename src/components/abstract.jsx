import React from 'react';
import { fotoDOT } from '../images';
import '../css/abstract.css';
import { Media } from 'react-bootstrap';

const Abstract = () => {
  return (
    <Media id="abstract-container">
      <img
        src={fotoDOT}
        alt="Foto minha de apresentação"
        id="abrastract-foto"
        width="20%"
      />
      <Media.Body id="body-container" >
        <h2>Sobre mim: </h2>
        <br/>
        <p>
          Sou apaixonado por Tecnologia, desenvolvimento de software e empresas que procurem fazer
          a diferença através da tecnologia.
        </p>
        <p>
          Trabalho no DOT digital group, uma empresa que desenvolve soluções inteligentes em educação com tecnologia e que tem a missão de desenvolver pessoas para impulsionar organizações. 
        </p>
        <p>
        Também estudo desenvolvimento de software na Trybe, uma escola que em sua metodologia de ensino ativa que traz uma experiência real do trabalho de um desenvolvedor de software, focada não apenas em ensinar hard skills mas também em preparar as pessoas para ter sucesso no mercado de tecnologia.
        </p>

      </Media.Body>
    </Media>

  );
};

export default Abstract;