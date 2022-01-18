import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';

const BooksList: React.FC = () => {
  return (
    <Row className="authorsSection">
        <Col xs={12}>
           
        <ul>
            <li className="mt-2">
                Author 01 Name
            </li>

        </ul>
        </Col>
    </Row>
);
} 

export default BooksList;
