import React from "react";
import { Col } from "react-bootstrap";
import { Plus } from "react-feather";

type AddBookProps = {
    onAddClick: () => void
}

const AddBook: React.FC<AddBookProps> = (props) => {
    return (
        <Col sm={12} className="mb-5 add-book" onClick={props.onAddClick}>
            <Plus className="plus_icon align-top" />
            <label className='add_book'>Add Book</label>
        </Col>
    )
};
export default AddBook;