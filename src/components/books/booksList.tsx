import React from "react";
import { Row, Col } from 'react-bootstrap';
import Book from "./Book";
import { IBook } from "../../types/libraryTypes";

type BookListProps = {
    books: IBook[]
    deleteBook: (deleteIndex: number) => void
    updateBook: (updateIndex: number) => void
}
const BookList: React.FC<BookListProps> = (props) => {
    const { books } = props

    const renderBooks = () => {
        if (books.length === 0) {
            return (
                <Row className="empty-label">
                    <p>no book listed here</p>
                </Row>
            )
        }
        else {
            return (
                <li className="list-unstyled mt-2">
                    {
                        books.map((book: IBook, index: number) =>
                            <Book num={index + 1} book={book} key={index}
                                deleteBook={props.deleteBook}
                                updateBook={props.updateBook} />)
                    }
                </li>
            );
        }
    }

    return (
        <Row className="bookList">
            <Col>
                <ul className="list-unstyled">
                    {renderBooks()}
                </ul>
            </Col>
        </Row>
    )
};
export default BookList;