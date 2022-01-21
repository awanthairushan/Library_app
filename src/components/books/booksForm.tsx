import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { AiOutlineCloseCircle} from "react-icons/ai";

const BooksForm: React.FC = () => {
  return (
    <Row className="booksFormSection  ">
      <Col xs={9}>
          
        <h1>Create Book   </h1>
        
      </Col>

      <Col xs={3}>
      <AiOutlineCloseCircle/>
      </Col>

      <Col xs={10}>
          <Container className="booksForm ml-3">
          <Form  className="ml-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title of the Book</Form.Label>
            <Form.Control className="border-2 border-secondary" type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>ISBN</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>

            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="end-0 mr-0 px-4 py-1">
            Create
          </Button>
        </Form>
          </Container>
          

      </Col>
    </Row>
  );
};

export default BooksForm;
