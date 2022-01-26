import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { XCircle } from "react-feather";

type BookFormProps = {
  onCloseClick : () => void
}

const BooksForm: React.FC<BookFormProps> = (props) => {
  return (
    <Row className="booksFormSection m-0">
      <Col xs={10} md={8} className="p-0">
        <h1>Create Book </h1>
      </Col>

      <Col xs={1} className="text-end p-0">
        <XCircle size={25}  className="icon p-0" onClick={props.onCloseClick}/>
      </Col>

      <Col xs={11} md={9} className="p-0 booksForm mt-2">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="formLabel">Title of the Book</Form.Label>
              <Form.Control
                className="border-2 border-secondary formInput"
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="formLabel">ISBN</Form.Label>
              <Form.Control
                type="text"
                className="border-2 border-secondary formInput"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="formLabel">Author</Form.Label>

              <Form.Select
                aria-label="Default select example"
                className="border-2 border-secondary formInput"
              >
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Button className="formButton" variant="primary" type="submit">
              Create
            </Button>
          </Form>
      </Col>
    </Row>
  );
};

export default BooksForm;
