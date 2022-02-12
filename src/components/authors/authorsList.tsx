import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import Author  from '../authors/author';
import { IAuthor } from '../../types/libraryTypes';
import EmptyLabel from './emptyLabel';

type AuthorsListProps = {
    authors:IAuthor[]
    deleteAuthor : (deleteIndex:number) => void
    updateAuthor : (updateIndex:number) => void
}
const AuthorsList: React.FC<AuthorsListProps> = (props) => {

    const {authors} = props

    const renderAuthors = () => {
        if (authors.length === 0) {
            return (
                <Row>
                    <Col xs={9}>
                        <EmptyLabel/>
                    </Col>
                </Row>
            );
        } else {
            return (
                <li className="mt-2">
                    {
                        authors.map((authors:IAuthor , index:number) =>
                            <Author authors={authors} index={index} key={index}
                                    deleteAuthor={props.deleteAuthor}
                                    updateAuthor={props.updateAuthor}/>
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
        </Col>
    </Row>
);
} 

export default AuthorsList;
