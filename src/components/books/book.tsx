import React, { PropsWithChildren } from "react";
import { Row,Col } from 'react-bootstrap';
import { Edit,Trash2 } from 'react-feather';
import { IBook } from "../../types/libraryTypes";
import { confirm } from "react-confirm-box";

type BookProps = {
    book:IBook
    num:number
}

const Book:React.FC<BookProps> = (props:PropsWithChildren<BookProps>) => {

    const {book, num} = props

    const onClickTrash = async () => {
        const result = await confirm("Are you sure Delete this?");
        if (result) {
          console.log("You click yes!");
          return;
        }
        console.log("You click No!");
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