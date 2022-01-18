import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import AuthorsList from '../authors/authorsList';
const AuthorsSection: React.FC = () => {
  return (
    <Row className="authorsSection">
        <Col xs={12}>
            <h1 className="mt-2 pb-2">Authors</h1>
        </Col>
        

        <Col className="" xs={12}>
            <AuthorsList/>
        </Col>
    </Row>
);
} 

export default AuthorsSection;
