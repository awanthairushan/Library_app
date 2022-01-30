import React,{useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Button,Image,Row,Col ,Container} from 'react-bootstrap';
import Welcome from  '../components/welcome/welcome';
import AuthorsSection from '../components/authors/authorsSection'
import BooksSection from '../components/books/booksSection';
import { IAuthor } from '../types/libraryTypes';

const LibraryPage: React.FC = () => {

  const Authors: IAuthor[] = [
    { name: "Author 1 name"},
    { name: "Author 2 name"},
    { name: "Author 3 name"},
]
const[authors,setAuthors]= useState(Authors);

const handleOnAddAuthor = (name:IAuthor) => {
  const userConfirmation = window.confirm("Add this Author?");
  const index=authors.length
  if (userConfirmation === true) {
      const allAuthors: IAuthor[] = authors.slice();
      allAuthors.splice(index,1,name);
      setAuthors(allAuthors);
  }
}

  return (
    <Container   fluid={true}>
        <Welcome/>

        <Row>
          <Col xs={{span:12,order:2}} md={{span:6,order:1}} className="">
            <BooksSection authors={authors}/>
          </Col>
            
          <Col xs={{span:12,order:1}} md={{span:6,order:2}} className="">
            <AuthorsSection authors={authors}
                             addAuthor={handleOnAddAuthor}/>
          </Col>
        </Row>
        
    </Container>
);
} 

export default LibraryPage;
