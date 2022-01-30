import React,{useState} from "react";
import AuthorList from "../authors/authorsList";
import {Row, Col , Form, Button} from "react-bootstrap";
import { XCircle } from "react-feather";

type AddAuthorProps = {
    onCloseClick : () => void
}

const AuthorForm: React.FC<AddAuthorProps> = (props) => {

    const [validated, setValidated] = useState(false);
    const [authorName, setAuthorName] = useState<string>("");
    const handleOnAuthorNameChanged = (name:string) => {
        setAuthorName(name)
    }

    const handleOnSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();
        if(!authorName){
            return;
        }
        
        setValidated(false)
    }
    return (
        <Row className="authorFormSection m-0">
            <Col xs={11} md={8} className="p-0">
                <h1>Create Author</h1>
            </Col>
            <Col xs={1} className="text-end p-0">
                <XCircle size={23} className="icon p-0" onClick={props.onCloseClick}/>
            </Col>
            <Col xs={11} md={9} className="p-0 authorForm">
                <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Label className="formLabel">Author</Form.Label>
                        <Form.Control
                            className="border-2 formInput"
                            type="text"
                            placeholder=""
                            required
                            />

                    </Form.Group>
                    <Button className="formButton" variant="primary" type="submit">
                        Create
                    </Button>

                </Form>

            </Col>



        </Row>
    );
}
export default AuthorForm;

