import React from "react";
import {Row,Col} from "react-bootstrap";
import { Plus } from "react-feather";

type AddBookProps = {
    onAddClick : () => void
}

const AddBook:React.FC<AddBookProps> = (props) => {
    return(
        <Col sm={12} className="mb-5 add-book" onClick={props.onAddClick}>
            <Plus className="text-primary plus"/>&nbsp;
            Add Book
        </Col>
    )
};
export default AddBook;