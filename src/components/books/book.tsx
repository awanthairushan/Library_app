import React, { PropsWithChildren } from "react";
import { Row, Col } from 'react-bootstrap';
import { Edit, Trash2 } from 'react-feather';
import { IBook } from "../../types/libraryTypes";

type BookProps = {
    book: IBook
    num: number
    deleteBook: (deleteIndex: number) => void
    updateBook: (updateIndex: number) => void
}

const Book: React.FC<BookProps> = (props: PropsWithChildren<BookProps>) => {

    const { book, num } = props

    return (
        <li>
            <Row className="book">
                <Col xs={9}>
                    <label className="py-2">{num}. {book.name}</label>
                </Col>
                <Col xs={3} className="text-end my-1 d-flex justify-content-end align-items-center">
                    <Edit className="text-warning edit me-3" onClick={() => props.updateBook(num - 1)} />
                    <Trash2 className="text-danger delete me-3" onClick={() => props.deleteBook(num - 1)} />
                </Col>
            </Row>
        </li>
    )
};
export default Book;