import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap';
import { Trash2, Edit } from "react-feather";
import { IAuthor } from '../../types/libraryTypes';
import { confirm } from "react-confirm-box";

type AuthorNameProps = {
    authors: IAuthor
    index: number
}


const Author: React.FC<AuthorNameProps> = (props) => {
    const {authors, index} = props

    const onClickTrash = async () => {
        const result = await confirm("Are you sure Delete this?");
        if (result) {
          console.log("You click yes!");
          return;
        }
        console.log("You click No!");
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