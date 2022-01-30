import React, { PropsWithChildren } from "react";
import { Row,Col } from 'react-bootstrap';
import { Edit,Trash2 } from 'react-feather';
import { IBook } from "../../types/libraryTypes";

type BookProps = {
    book:IBook
    num:number
}

const Book:React.FC<BookProps> = (props:PropsWithChildren<BookProps>) => {

    const {book, num} = props

    const onClickTrash =  () => {
        const userConfirmation = window.confirm("Delete this book?");
        if (userConfirmation === true) {
            console.log("hit")
            /*const allBooks: IBook[] = books.slice();
            allBooks.splice(index,1,book);
            setBooks(allBooks);*/
        }
      };
    return (
        <li>
            
        <Row className="book">
            <Col xs={8}>
                <label className="py-2">{num}. {book.name}</label>
            </Col>
            <Col xs={4} className="text-end my-1 d-flex justify-content-end align-items-center">
                <Edit className="text-warning edit me-3"/> 
                <Trash2 className="text-danger delete me-3" onClick={onClickTrash}/>
            </Col>
        </Row>
        </li>
    )
};
export default Book;