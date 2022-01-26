import React from "react";
import {Row,Col} from "react-bootstrap";
import { Plus } from "react-feather";

type AddAuthorProps = {
    onAddClick : () => void
}

const AddAuthor:React.FC<AddAuthorProps> = (props) => {
  return (
    <ul className="list-unstyled mb-5" onClick={props.onAddClick}>
        <Plus className='plus_icon align-top'/>
        <label className='add_author'>Add Author</label>
    </ul>
  )
}
export default  AddAuthor;