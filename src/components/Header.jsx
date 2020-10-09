import React from 'react';
import { ButtonGroup, Card, Navbar } from 'react-bootstrap';
import {
  htmlIcon,
  cssIcon,
  vanillajsIcon,
  bootstrapIcon,
  jestLogo,
  reactLogo,
  reactTestingLibraryLogo,
  netsuiteIcon,
  mysqlIcon,
  mongodbIcon,
} from '../images';

import '../css/header.css'

const Header = () => {
  return (
    <Navbar className="header full fix" fixed="top" >
      <div>
        <ButtonGroup className="mb-2">
          <a href="#htmlZone">
            <Card style={{ width: "50px", marginTop: "2px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={htmlIcon} />
            </Card>
          </a>
          <a href="#cssZone">
            <Card style={{ width: "38px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={cssIcon} />
            </Card>
          </a>
          <a href="#vanillaZone">
            <Card style={{ width: "43px", margin: "7px 4px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={vanillajsIcon} />
            </Card>
          </a>
          <a href="#bootstrapZone">
            <Card style={{ width: "55px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={bootstrapIcon} />
            </Card>
          </a>
          <a href="#jestZone">
            <Card style={{ width: "50px", marginTop: "2px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={jestLogo} />
            </Card>
          </a>
          <a href="#reactZone">
            <Card style={{ width: "50px", marginTop: "4px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={reactLogo} />
            </Card>
          </a>
          <a href="#rtlZone">
            <Card style={{ width: "50px", marginTop: "7px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={reactTestingLibraryLogo} />
            </Card>
          </a>
          <a href="#netsuiteZone">
            <Card style={{ width: "50px", marginTop: "3px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={netsuiteIcon} />
            </Card>
          </a>
          <a href="#mysqlZone">
            <Card style={{ width: "50px", marginTop: "4px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={mysqlIcon} />
            </Card>
          </a>
          <a href="#mongodbZone">
            <Card style={{ width: "50px", marginTop: "4px", backgroundColor: "transparent" }}>
              <Card.Img variant="top" src={mongodbIcon} />
            </Card>
          </a>
        </ButtonGroup>
      </div>
    </Navbar>
  );
};

export default Header;