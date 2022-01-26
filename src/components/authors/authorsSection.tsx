import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import AuthorsList from '../authors/authorsList';
import AuthorForm from '../authors/authorForm';
import AddAuthor from '../authors/addAuthor';

const AuthorsSection: React.FC = () => {
  return (
    <Row className="authorsSection" >
        <Col sm={12} >
            <h1 className="mt-2 pb-2">Authors</h1>
        </Col>
        

        <Col className="" sm={12}>
            <AuthorsList/>
        </Col>
        <Col>
            <AddAuthor></AddAuthor>
        </Col>
        <Col className="" xs={12}>
            <AuthorForm/>
        </Col>
    </Row>
);
} 

export default AuthorsSection;
