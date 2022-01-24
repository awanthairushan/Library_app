import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import Author  from '../authors/author';
import { IAuthor } from '../../types/libraryTypes';
import EmptyLabel from './emptyLabel';
import {Plus} from 'react-feather'

const AuthorsList: React.FC = () => {

    const authors: IAuthor[] = [
        { name: "Author 1 name"},
        { name: "Author 2 name"},
        { name: "Author 3 name"},
        { name: "Author 4 name"},
    ]

    const renderAuthors = () => {
        if (authors.length === 0) {
            return (
                <Col xs={9}>
                    <EmptyLabel/>
                </Col>
            );
        } else {
            return (
                <li className="mt-2">
                    {
                        authors.map((authors:IAuthor , index:number) =>
                            <Author authors={authors} index={index}/>
                        )
                    }
                </li>
            );
        }
    }

  return (
    <Row className="authorList">
        <Col>
            <ul className="list-unstyled">
                {renderAuthors()}
            </ul>
            <ul className="list-unstyled">
                <Plus className='plus_icon align-top'/>
                <label className='add_author'>Add Author</label>
            </ul>
        </Col>
    </Row>
);
} 

export default AuthorsList;
