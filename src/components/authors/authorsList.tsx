import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import Author  from '../authors/author';
import { IAuthor } from '../../type/libraryType';
import EmptyLabel from './emptyLabel';

const AuthorsList: React.FC = () => {

    const authors: IAuthor[] = [
        { name: "Author 1"},
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
                    <Author/>
                </li>
            );
        }
    }

  return (
    <Row className="authorsSection">
        <Col xs={12}>
            <ul className="list-unstyled">
                {renderAuthors()}
            </ul>
        </Col>
    </Row>
);
} 

export default AuthorsList;
