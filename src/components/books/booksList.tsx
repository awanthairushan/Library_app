import React from "react";
import { Row,Col } from 'react-bootstrap';
import Book from "./book";
import { IBook } from "../../types/libraryTypes";

const BookList:React.FC = () => {
    const books:IBook[] = [
        {name:'Book 1',isbn:467465,author:'Author 1'},
        {name:'Book 2',isbn:467465,author:'Author 1'},
        {name:'Book 3',isbn:467465,author:'Author 1'},
    ]

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
                        <Book num={index + 1} book={book} key={index}/>)
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