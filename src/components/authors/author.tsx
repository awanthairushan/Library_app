import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import { FiTrash2,FiEdit } from "react-icons/fi";





const Author: React.FC = () => {
  return (
    <Row className="authorsSection">

        <Col xs={9}>
               1. Author 01 Name
        </Col>
        <Col xs={3}>
            <FiEdit className="mx-3"/>
            <FiTrash2/>
        </Col>
    </Row>
);
} 

export default Author;