import React,{useState,Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import Select from 'react-select'
import { IBook, AuthorsInDropDown, IAuthor } from "../../types/libraryTypes";
import NumberFormat from 'react-number-format';
import { useToasts } from 'react-toast-notifications';

type BookFormProps = {
  onCloseClick : () => void
  addBook : (book:IBook) => void
  options : IAuthor[]
}

const BooksForm: React.FC<BookFormProps> = (props) => {

  const { addToast } = useToasts()
  const {options} = props

    const [validated, setValidated] = useState(false);
    const [bookName, setBookName] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");
    const [bookAuthor, setBookAuthor] = useState<AuthorsInDropDown | null>(null)

    const handleOnBookNameChanged = (name:string) => {
        setBookName(name)
    }
    const handleOnisbnChanged = (name:string) => {
      setIsbn(name)
    }
    const handleOnBookAuthorChanged = (name:AuthorsInDropDown|null) => {
      setBookAuthor(name)
    }

  const optionlist:AuthorsInDropDown[] = options.map((option:IAuthor) => {
    return(
      { value: option.name, label: option.name }
    )
  });

    const handleOnSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        setValidated(true);
        event.preventDefault();
        if(!bookName || !isbn || !bookAuthor){
            return;
        }
        else{
          const newBook: IBook = {name:bookName, isbn:12321, author:bookAuthor.value};
          props.addBook(newBook)
          addToast("New Book added", { appearance: 'success', autoDismiss: true });
          setBookName("")
          setIsbn("")
          setBookAuthor(null)
        }
        setValidated(false)
    }
  return (
    <Row className="booksFormSection m-0">
      <Col xs={11} sm={8} className="p-0">
        <h1>Create Book </h1>
      </Col>

      <Col xs={1} className="text-end p-0">
                <XCircle size={23} className="icon p-0" onClick={props.onCloseClick}/>
            </Col>

      <Col xs={12} sm={9} className="p-0 booksForm mt-2">
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
              <NumberFormat required className="form-control" placeholder="" prefix={'$ '} thousandSeparator={true} value={isbn}
                                onValueChange={(values: any) => {
                                  handleOnisbnChanged(values.value)
                                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="formLabel">Author</Form.Label>

              <Select className="border-2 formInput"
                    options={optionlist} 
                    value={bookAuthor}
                    onChange={(selected: AuthorsInDropDown | null) => {
                      handleOnBookAuthorChanged(selected)
                  }}/>
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
