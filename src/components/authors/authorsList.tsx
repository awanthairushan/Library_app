import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import Author  from '../authors/author'

const AuthorsList: React.FC = () => {
  return (
    <Row className="authorsSection">
        <Col xs={12}>
           
        <ul className="list-unstyled">
            <li className="mt-2">
                <Author/>
            </li>


        </ul>
        </Col>
    </Row>
);
} 

export default AuthorsList;
