import React, { useState } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import BooksList  from '../books/booksList';
import BooksForm from './booksForm';
import AddBook from './addBook';

const BooksSection: React.FC = () => {
    const [isFormVisible,setIsFormVisible] = useState(false);

    const handleOnAddBookClick = () => {
        setIsFormVisible(true)
    }
    const handleOnCloseFormClick = () => {
        setIsFormVisible(false)
    }

  return (
    <Row className="booksSection">
        <Col sm={12}>
            <h1   className="mt-2 pb-2">Books</h1>
        </Col>
        

        <Col className="" sm={12}>
            <BooksList/>
        </Col>
        <Col>
            <AddBook onAddClick = {handleOnAddBookClick}/>
        </Col>
        <Col className="" xs={12}>
            {isFormVisible && <BooksForm onCloseClick = {handleOnCloseFormClick}/>}
        </Col>
    </Row>
);
} 

export default BooksSection;
