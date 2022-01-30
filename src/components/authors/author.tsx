import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap';
import { Trash2, Edit } from "react-feather";
import { IAuthor } from '../../types/libraryTypes';

type AuthorNameProps = {
    authors: IAuthor
    index: number
}


const Author: React.FC<AuthorNameProps> = (props) => {
    const {authors, index} = props

    const onClickTrash =  () => {
        const userConfirmation = window.confirm("Delete this auther?");
        if (userConfirmation === true) {
            console.log("hit")
            /*const allBooks: IBook[] = books.slice();
            allBooks.splice(index,1,book);
            setBooks(allBooks);*/
        }
      };

  return (
    <Row className="author">
        <Col xs={9}>
            <label className="py-2">{index+1} . {authors.name}</label>               
        </Col>
        <Col xs={3} className='hover_area d-flex flex-row-reverse align-items-center'>
            <Trash2 className="text-danger delete me-3 icon align-middle" onClick={onClickTrash}/>
            <Edit className="text-warning edit me-3 icon align-bottom"/>
        </Col>
    </Row>
);
} 

export default Author;