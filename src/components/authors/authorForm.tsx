import React,{useState, useEffect} from "react";
import {Row, Col , Form, Button} from "react-bootstrap";
import { XCircle } from "react-feather";
import { IAuthor } from "../../types/libraryTypes";

type AddAuthorProps = {
    onCloseClick : () => void
    addAuthor : (author:IAuthor) => void
    sendUpdateAuthor : (author:IAuthor) => void
    updateAuthorValues:IAuthor|null
    updateAuthorIndex:number|null
}

const AuthorForm: React.FC<AddAuthorProps> = (props) => {

    const [validated, setValidated] = useState(false);
    const [authorName, setAuthorName] = useState<string>("");
    const [authorUpdateIndex, setAuthorUpdateIndex] = useState<number|null>(null)

    const handleOnAuthorNameChanged = (name:string) => {
        setAuthorName(name)
    }

    useEffect(() => {
        if (!props.updateAuthorValues) {
            return;
        }
        setAuthorName(props.updateAuthorValues.name);
        setAuthorUpdateIndex(props.updateAuthorIndex);
    }, [props.updateAuthorValues])

    const handleOnSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);
        if(!authorName){
            return;
        }
        else if(authorUpdateIndex !== null){
            const newAuthor: IAuthor = {name: authorName}
            props.sendUpdateAuthor(newAuthor)
            setAuthorName("")
        }
        else{
            const newAuthor: IAuthor = {name: authorName};
            props.addAuthor(newAuthor)
            setAuthorName("")
        }
        setValidated(false)
    }
    return (
        <Row className="author-form-section m-0">
            <Col xs={12} sm={8} className="p-0">
                <h1>{!authorUpdateIndex?"Create ":"Update "} Author</h1>
            </Col>
            <Col xs={1} className="text-end p-0">
                <XCircle size={23} className="icon p-0" onClick={props.onCloseClick}/>
            </Col>
            <Col xs={12} sm={9} className="p-0 author-form">
                <Form noValidate validated={validated} onSubmit={handleOnSubmit} className="ms-sm-4">
                    <Form.Group className="mb-3 form-author" controlId="formAuthor">
                        <Form.Label className="form-label">Author</Form.Label>
                        <Form.Control
                            className="border-2 formInput"
                            type="text"
                            placeholder=""
                            value={authorName}
                            required
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>,) =>
                                handleOnAuthorNameChanged(ev.target.value)}
                            />
                    </Form.Group>
                    <Button className="formButton" variant="primary" type="submit">
                        {!authorUpdateIndex?"Create":"Update"}
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
export default AuthorForm;

