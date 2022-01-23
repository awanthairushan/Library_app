import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import { Trash2, Edit } from "react-feather";
import { propTypes } from 'react-bootstrap/esm/Image';
import { IAuthor } from '../../types/libraryTypes';

type AuthorNmaeProps = {
    authors: IAuthor
    index: number
}


const Author: React.FC<AuthorNmaeProps> = (props) => {
    const {authors, index} = props

  return (
    <Row className="author">
        <Col xs={9}>
            <label className="py-2">{index+1} . {authors.name}</label>               
        </Col>
        <Col xs={3} className='hover_area'>
            <Edit className="text-warning edit me-3 icon"/> 
            <Trash2 className="text-danger delete me-3 icon"/>
        </Col>
    </Row>
);
} 

export default Author;