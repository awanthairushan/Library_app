import React,{useState,Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import Select from 'react-select'

type BookFormProps = {
  onCloseClick : () => void
}

const BooksForm: React.FC<BookFormProps> = (props) => {

  const [validated, setValidated] = useState(false);
    const [bookName, setBookName] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");

    const handleOnBookNameChanged = (name:string) => {
        setBookName(name)
    }
    const handleOnisbnChanged = (name:string) => {
      setIsbn(name)
  }

  const options = [
    { value: 'Author 1', label: 'Author 1' },
    { value: 'Author 2', label: 'Author 2' },
    { value: 'Author 3', label: 'Author 3' }
  ]

    const handleOnSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();
        if(!bookName || !isbn){
            return;
        }
        
        setValidated(false)
    }
  return (
    <Row className="booksFormSection m-0">
      <Col xs={8} className="p-0">
        <h1>Create Book </h1>
      </Col>

      <Col xs={1} className="text-end p-0">
        <XCircle size={25}  className="icon p-0" onClick={props.onCloseClick}/>
      </Col>

      <Col xs={9} className="p-0 booksForm mt-2">
          <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="formLabel">Title of the Book</Form.Label>
              <Form.Control
                className="border-2 formInput"
                type="text"
                placeholder=""
                required
                value={bookName}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>,) =>
                    handleOnBookNameChanged(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="formLabel">ISBN</Form.Label>
              <Form.Control
                type="text"
                className="border-2 formInput"
                placeholder=""
                required
                value={isbn}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>,) =>
                    handleOnisbnChanged(ev.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="formLabel">Author</Form.Label>

              <Select className="border-2 formInput"
                    options={options} />
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
