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
          <Col xs={{span:12,order:2}} md={{span:6,order:1}} className="">
            <BooksSection/>
          </Col>
            
          <Col xs={{span:12,order:1}} md={{span:6,order:2}} className="">
            <AuthorsSection/>
          </Col>
        </Row>
        
    </Container>
);
} 

export default LibraryPage;
