import React from "react";
import {Row,Col} from "react-bootstrap";
import { Plus } from "react-feather";

const AddAuthor = () => {
  return (
      <Col sm={12} className="mb-5">
        <Plus className="test-primary plus" /> &nbsp;
        Add Author
      </Col>
  )
}
export default  AddAuthor;