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
    <Row className="authorsSection">
        <Col xs={9}>
               {index+1} . {authors.name}
        </Col>
        <Col xs={3}>
            <Edit className="mx-3"/>
            <Trash2/>
        </Col>
    </Row>
);
} 

export default Author;