import React, {useState} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import AuthorsList from '../authors/authorsList';
import AuthorForm from '../authors/authorForm';
import AddAuthor from '../authors/addAuthor';

const AuthorsSection: React.FC = () => {
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
            <AuthorsList/>
        </Col>
        <Col>
            <AddAuthor onAddClick = {handleOnAddAuthorClick}/>
        </Col>
        <Col className="" xs={12}>
            {isFormVisible && <AuthorForm onCloseClick = {handleOnCloseFormClick}/>}
        </Col>
    </Row>
);
} 

export default AuthorsSection;
