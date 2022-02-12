import React, {useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import AuthorsList from '../authors/authorsList';
import AuthorForm from '../authors/authorForm';
import AddAuthor from '../authors/addAuthor';
import { IAuthor } from '../../types/libraryTypes';

type AuthorsSectionProps = {
    authors:IAuthor[]
    isFormVisible:boolean
    updateAuthorValues:IAuthor|null
    updateAuthorIndex:number|null
    addAuthor : (author:IAuthor) => void
    sendUpdateAuthor : (author:IAuthor) => void
    deleteAuthor : (deleteIndex:number) => void
    updateAuthor : (updateIndex:number) => void
    addAuthorClick : () => void
    closeFormClick : () => void
}
const AuthorsSection: React.FC<AuthorsSectionProps> = (props) => {

  return (
    <Row className="authorsSection" >
            <Col sm={12} >
                <h1 className="mt-2 pb-2">Authors</h1>
            </Col>
            <Col className="" sm={12}>
                <AuthorsList authors ={props.authors}
                             deleteAuthor={props.deleteAuthor}
                             updateAuthor={props.updateAuthor}/>
            </Col>
            <Col>
                <AddAuthor onAddClick = {props.addAuthorClick}/>
            </Col>
            <Col className="" xs={12}>
                {props.isFormVisible && <AuthorForm onCloseClick = {props.closeFormClick}
                                            addAuthor={props.addAuthor}
                                            sendUpdateAuthor={props.sendUpdateAuthor}
                                            updateAuthorValues={props.updateAuthorValues}
                                            updateAuthorIndex = {props.updateAuthorIndex}/>}
            </Col>
    </Row>
);
} 

export default AuthorsSection;
