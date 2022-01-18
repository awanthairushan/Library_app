import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';

const Author: React.FC = () => {
  return (
    <Row className="authorsSection">
        <Col xs={9}>
                Author 01 Name
        </Col>
        <Col xs={3}>
            <i   className="trash-2"></i>
            <i></i>
            <i data-feather="circle"></i>
        </Col>
    </Row>
);
} 

export default Author;