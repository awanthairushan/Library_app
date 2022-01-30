import React, { useState } from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import BooksList  from '../books/booksList';
import BooksForm from './booksForm';
import AddBook from './addBook';
import { IBook,IAuthor } from "../../types/libraryTypes";

type BooksSectionProps = {
    authors:IAuthor[]
}
const BooksSection: React.FC<BooksSectionProps> = (props) => {

    const Books:IBook[] = [
        {name:'Book 1',isbn:467465,author:'Author 1'},
        {name:'Book 2',isbn:467465,author:'Author 1'},
        {name:'Book 3',isbn:467465,author:'Author 1'},
    ]

    const[books,setBooks]= useState(Books);
    const [isFormVisible,setIsFormVisible] = useState(false);

    const handleOnAddBookClick = () => {
        setIsFormVisible(true)
    }
    const handleOnCloseFormClick = () => {
        setIsFormVisible(false)
    }

    const handleOnAddBook = (book:IBook) => {
        const userConfirmation = window.confirm("Add this Book?");
        const index=books.length
        if (userConfirmation === true) {
            const allBooks: IBook[] = books.slice();
            allBooks.splice(index,1,book);
            setBooks(allBooks);
        }
    }
  return (
    <Row className="booksSection">
        
        <Col sm={12}>
            <h1   className="mt-2 pb-2">Books</h1>
        </Col>
        

        <Col className="" sm={12}>
            <BooksList books = {books}/>
        </Col>
        <Col>
            <AddBook onAddClick = {handleOnAddBookClick}/>
        </Col>
        <Col className="" xs={12}>
            {isFormVisible && <BooksForm onCloseClick = {handleOnCloseFormClick}
                                         addBook = {handleOnAddBook}
                                         options = {props.authors}/>}
        </Col>
    </Row>
);
} 

export default BooksSection;
