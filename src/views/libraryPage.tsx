import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Button,Image,Row,Col ,Container} from 'react-bootstrap';
import Welcome from  '../components/welcome/welcome';
import AuthorsSection from '../components/authors/authorsSection'
import BooksSection from '../components/books/booksSection';
 
const LibraryPage: React.FC = () => {
  return (
    <Container   fluid={true}>
        <Welcome/>

        <Row>
          <Col xs={12} md={6} className="">
            <BooksSection/>
          </Col>
            
          <Col xs={12} md={6} className="">
            <AuthorsSection/>
          </Col>
        </Row>
        
    </Container>
);
} 

export default LibraryPage;
