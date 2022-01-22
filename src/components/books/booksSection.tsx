import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import BooksList  from '../books/booksList';
import BooksForm from './booksForm';

const BooksSection: React.FC = () => {
  return (
    <Row className="booksSection  ">
        <Col xs={12}>
            <h1   className="mt-2 pb-2">Books</h1>
        </Col>
        

        <Col className="" xs={12}>
            <BooksList/>
        </Col>
        <Col className="" xs={12}>
            <BooksForm/>
        </Col>
    </Row>
);
} 

export default BooksSection;
