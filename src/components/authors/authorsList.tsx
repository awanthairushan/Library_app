import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import Author  from '../authors/author';
import { IAuthor } from '../../types/libraryTypes';
import EmptyLabel from './emptyLabel';

const AuthorsList: React.FC = () => {

    const authors: IAuthor[] = [
        { name: "Author 1"},
        { name: "Author 2"},
        { name: "Author 3"},
        { name: "Author 4"},
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
                    {/* <Author/> */}
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
