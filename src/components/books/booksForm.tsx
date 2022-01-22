import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { XCircle } from 'react-feather';

const BooksForm: React.FC = () => {
  return (
    <Row className="booksFormSection">
      <Col xs={9}>
        <h1>Create Book </h1>
      </Col>

      <Col xs={3} className="">
      <XCircle className="me-3"/>
      </Col>

      <Col xs={10}>
        <Container className="booksForm ml-5 mt-2">
          <Form className="ml-3">
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
        </Container>
      </Col>
    </Row>
  );
};

export default BooksForm;
