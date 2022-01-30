import React, {useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import AuthorsList from '../authors/authorsList';
import AuthorForm from '../authors/authorForm';
import AddAuthor from '../authors/addAuthor';
import { IAuthor } from '../../types/libraryTypes';

type AuthorsSectionProps = {
    authors:IAuthor[]
    addAuthor : (author:IAuthor) => void
}
const AuthorsSection: React.FC<AuthorsSectionProps> = (props) => {

    const [isFormVisible,setIsFormVisible] = useState(false);

    const handleOnAddAuthorClick = () => {
        setIsFormVisible(true)
    }
    const handleOnCloseFormClick = () => {
        setIsFormVisible(false)
    }

  return (
    <Row className="authorsSection" >
        <Col sm={12} >
            <h1 className="mt-2 pb-2">Authors</h1>
        </Col>
        

        <Col className="" sm={12}>
            <AuthorsList authors ={props.authors}/>
        </Col>
        <Col>
            <AddAuthor onAddClick = {handleOnAddAuthorClick}/>
        </Col>
        <Col className="" xs={12}>
            {isFormVisible && <AuthorForm onCloseClick = {handleOnCloseFormClick}
                                          addAuthor={props.addAuthor}/>}
        </Col>
    </Row>
);
} 

export default AuthorsSection;
