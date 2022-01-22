import React from "react";
import AuthorList from "../authors/authorsList";
import {Row, Col , Form, Button} from "react-bootstrap";
import { XCircle } from "react-feather";

const AuthorForm = () => {
    return (
        <Row className="authorFormSection m-0">
            <Col xs={8} className="p-0">
                <h3>Create Author</h3>
            </Col>
            <Col xs={1} className="text-end p-0">
                <XCircle size={23} className="icon p-0" />
            </Col>
            <Col xs={9} className="p-0 authorForm">
                <Form >
                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Label className="formLabel">Author</Form.Label>
                        <Form.Control
                            className="border-2 border-secondary formInput"
                            type="text"
                            placeholder=""
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

