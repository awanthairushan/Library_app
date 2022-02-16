import React, { useState, useEffect } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import Select from 'react-select'
import { IBook, AuthorsInDropDown, IAuthor } from "../../types/libraryTypes";
import NumberFormat from 'react-number-format';

type BookFormProps = {
  onCloseClick: () => void
  addBook: (book: IBook) => void
  options: IAuthor[]
  sendUpdateBook: (author: IBook) => void
  updateBookValues: IBook | null
  updateBookIndex: number | null
}

const BooksForm: React.FC<BookFormProps> = (props) => {

  const { options } = props

  const [validated, setValidated] = useState(false);
  const [bookName, setBookName] = useState<string>("");
  const [isbn, setIsbn] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<AuthorsInDropDown | null>(null)
  const [bookUpdateIndex, setBookUpdateIndex] = useState<number | null>(null)

  const [bookNameValied, setBookNameValied] = useState<string>("");

  const handleOnBookNameChanged = (name: string) => {
    setBookName(name)
  }
  const handleOnisbnChanged = (name: string) => {
    setIsbn(name)
  }
  const handleOnBookAuthorChanged = (name: AuthorsInDropDown | null) => {
    setBookAuthor(name)
    if (bookAuthor !== null) {
      setBookNameValied("yes")
    }
  }

  const optionlist: AuthorsInDropDown[] = options.map((option: IAuthor) => {
    return (
      { value: option.name, label: option.name }
    )
  });

  useEffect(() => {
    if (!props.updateBookValues) {
      return;
    }
    const updateAuthorName = { value: props.updateBookValues.author, label: props.updateBookValues.author }
    setBookName(props.updateBookValues.name);
    setIsbn(props.updateBookValues.isbn);
    setBookAuthor(updateAuthorName);
    setBookUpdateIndex(props.updateBookIndex);
  }, [props.updateBookValues])

  const handleOnSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (bookAuthor == null) {
      setBookNameValied("yes");
    }
    event.preventDefault();
    setValidated(true);
    event.preventDefault();
    if (!bookName || !isbn || !bookAuthor) {
      return;
    }
    else if (bookUpdateIndex !== null) {
      const newBook: IBook = { name: bookName, isbn: isbn, author: bookAuthor.value };
      props.sendUpdateBook(newBook)
      setBookName("");
      setIsbn("");
      setBookAuthor(null);
    }
    else {
      const newBook: IBook = { name: bookName, isbn: isbn, author: bookAuthor.value };
      props.addBook(newBook)
      setBookName("")
      setIsbn("")
      setBookAuthor(null)
      console.log(bookName + isbn)
    }
    setValidated(false)
  }
  const bookAuthorValidate = () => {
    if (bookAuthor == null && bookNameValied == "") {
      return "formInput";
    }
    else if (bookAuthor == null && bookNameValied == "yes") {
      return "selectinvalid";
    }
    else if (bookAuthor !== null && bookNameValied == "") {
      return "formInput";
    }
    else {
      return "selectinvalid1";
    }
  }
  return (
    <Row className="booksFormSection m-0">
      <Col xs={11} sm={8} className="p-0">
        <h1>{!bookUpdateIndex ? "Create " : "Update "} Book </h1>
      </Col>

      <Col xs={1} className="text-end p-0">
        <XCircle size={23} className="icon p-0" onClick={props.onCloseClick} />
      </Col>

      <Col xs={12} sm={9} className="p-0 booksForm mt-2">
        <Form noValidate validated={validated} onSubmit={handleOnSubmit} className="ms-sm-4">
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
            <Form.Label className="formLabel">Price</Form.Label>
            <NumberFormat required className="form-control"
              placeholder=""
              prefix={'$ '}
              thousandSeparator={true}
              value={isbn}
              onValueChange={(values: any) => {
                handleOnisbnChanged(values.value)
              }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="formLabel">Author</Form.Label>

            <Select className={bookAuthorValidate()}
              options={optionlist}
              value={bookAuthor}
              isClearable={true}
              onChange={(selected: AuthorsInDropDown | null) => {
                handleOnBookAuthorChanged(selected)
              }} />
          </Form.Group>
          <Button className="formButton" variant="primary" type="submit">
            {!bookUpdateIndex ? "Create" : "Update"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default BooksForm;
