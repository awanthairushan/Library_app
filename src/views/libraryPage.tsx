import React,{useState,useEffect} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Button,Image,Row,Col ,Container} from 'react-bootstrap';
import Welcome from  '../components/welcome/welcome';
import AuthorsSection from '../components/authors/authorsSection'
import BooksSection from '../components/books/booksSection';
import { IAuthor } from '../types/libraryTypes';
import { useToasts } from 'react-toast-notifications';

const LibraryPage: React.FC = () => {

  const { addToast } = useToasts()

  const Authors: IAuthor[] = [
    { name: "Author 1 name"},
    { name: "Author 2 name"},
    { name: "Author 3 name"},
]
const [isFormVisible,setIsFormVisible] = useState(false);
const[authors,setAuthors]= useState(Authors);
const [updateAuthor, setUpdateAuthor] = useState<IAuthor|null>(null);
const [updateAuthorIndex, setUpdateAuthorIndex] = useState<number|null>(null);

const handleOnAddAuthorClick = () => {
  setIsFormVisible(true)
}
const handleOnCloseFormClick = () => {
  setIsFormVisible(false)
}

useEffect(() => {
  if (!updateAuthor && !updateAuthorIndex) {
      return;
  }
  setIsFormVisible(true);
}, [updateAuthor, updateAuthorIndex]);

const handleOnDeleteAuthor = (deleteIndex:number) => {
  const userConfirmation = window.confirm("Delete this Author?");
  const index=authors.length
  if (userConfirmation === true) {
      const allAuthors: IAuthor[] = authors.slice();
      allAuthors.splice(deleteIndex,1);
      setAuthors(allAuthors);
      addToast("Author Deleted", { appearance: 'success', autoDismiss: true });
  }
}

const handleOnUpdateAuthor = (updateIndex:number) => {
  setUpdateAuthor(authors[updateIndex]);
  setUpdateAuthorIndex(updateIndex);
}

const handleOnAddAuthor = (name:IAuthor) => {
  //const userConfirmation = window.confirm("Add this Author?");
  const index=authors.length
  //if (userConfirmation === true) {
      const allAuthors: IAuthor[] = authors.slice();
      allAuthors.splice(index,1,name);
      addToast("New Author added", { appearance: 'success', autoDismiss: true });
      setAuthors(allAuthors);
  //}
}
const handleOnSendUpdateAuthor = (name:IAuthor) => {
  //const userConfirmation = window.confirm("Update this Author?");
  var index=authors.length
  if(updateAuthorIndex !== null){
    index=updateAuthorIndex
  }
  //if (userConfirmation === true) {
      const allAuthors: IAuthor[] = authors.slice();
      allAuthors.splice(index,1,name);
      addToast("Author Updated", { appearance: 'success', autoDismiss: true });
      setAuthors(allAuthors);
  //}
  setUpdateAuthor(null);
  setUpdateAuthorIndex(null);
}

  return (
    <Container   fluid={true}>
        <Welcome/>

        <Row>
          <Col xs={{span:12,order:2}} md={{span:6,order:1}} className="">
            <BooksSection authors={authors}/>
          </Col>
            
          <Col xs={{span:12,order:1}} md={{span:6,order:2}} className="">
            <AuthorsSection authors={authors}
                            isFormVisible={isFormVisible}
                             addAuthor={handleOnAddAuthor}
                             deleteAuthor = {handleOnDeleteAuthor}
                             updateAuthor = {handleOnUpdateAuthor}
                             addAuthorClick = {handleOnAddAuthorClick}
                             closeFormClick = {handleOnCloseFormClick}
                             updateAuthorValues = {updateAuthor}
                             updateAuthorIndex = {updateAuthorIndex}
                             sendUpdateAuthor={handleOnSendUpdateAuthor}/>
          </Col>
        </Row>
        
    </Container>
);
} 

export default LibraryPage;
