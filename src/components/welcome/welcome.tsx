import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import welcomeImage from '../../assets/images/welcomeImage.jpg';

const Welcome: React.FC = () => {
  return (
    <Row className="welcome">
      <Col xs={12}>
        <h1 className="text-center my-sm-1 my-md-2 my-lg-3 ">My Library</h1>
      </Col>
      <Col xs={12} className="p-0">
        <Image className="" src={welcomeImage} />
      </Col>
      <Col xs={12} className="pt-2 text-end pe-sm-2 pe-md-4 pe-lg-5 photocreadit">
        Photo by <a href="https://unsplash.com/photos/ajE5goOGzZc">Anna Hunko </a>
        on <a href="https://unsplash.com/">Unsplash</a>
      </Col>
    </Row>
  );
}

export default Welcome;
