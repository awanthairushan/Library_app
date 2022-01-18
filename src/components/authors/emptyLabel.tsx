import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';

const EmptyLabel: React.FC = () => {
  return (
    <Row className="">
        <Col xs={12}>
            <p >author list is empty</p>
        </Col>
    </Row>
);
} 

export default EmptyLabel;