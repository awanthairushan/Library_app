import React from "react";
import { Row,Col } from 'react-bootstrap';
import Book from "./book";
import { IBook } from "../../types/libraryTypes";

type BookListProps = {
    books: IBook[]
    deleteBook : (deleteIndex:number) => void
}
const BookList:React.FC<BookListProps> = (props) => {
    const {books} = props

    const renderBooks = () => {
        if(books.length===0){
            return (
                <Row className="empty-label">
                    <p>no book listed here</p>
                </Row>
            )
        }
        else{
            return ( 
                <ol className="list-unstyled mt-3">
                    {
                        books.map((book:IBook,index:number) =>
                        <Book num={index + 1} book={book} key={index}
                                deleteBook={props.deleteBook}/>)
                    }
            </ol>
            );
        }
    }

    return (
        <Col sm={12} className="bookList">
            {renderBooks()}
        </Col>
    )
};
export default BookList;