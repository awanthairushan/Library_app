import React from "react";
import { Plus } from "react-feather";

type AddAuthorProps = {
    onAddClick : () => void
}

const AddAuthor:React.FC<AddAuthorProps> = (props) => {
  return (
    <ol className="list-unstyled mb-5" onClick={props.onAddClick}>
        <Plus className='plus_icon align-top'/>
        <label className='add_author'>Add Author</label>
    </ol>
  )
}
export default  AddAuthor;