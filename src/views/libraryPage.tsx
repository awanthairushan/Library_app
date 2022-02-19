import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Welcome from '../components/welcome/Welcome';
import AuthorsSection from '../components/authors/AuthorsSection'
import BooksSection from '../components/books/BooksSection';
import { IAuthor } from '../types/libraryTypes';
import { useToasts } from 'react-toast-notifications';
import Swal from 'sweetalert2';

const LibraryPage: React.FC = () => {

  const { addToast } = useToasts()

  const Authors: IAuthor[] = []
  
  // const Authors: IAuthor[] = [
  //   { name: "Author 1 name" },
  //   { name: "Author 2 name" },
  //   { name: "Author 3 name" },
  // ]
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [authors, setAuthors] = useState(Authors);
  const [updateAuthor, setUpdateAuthor] = useState<IAuthor | null>(null);
  const [updateAuthorIndex, setUpdateAuthorIndex] = useState<number | null>(null);

  const handleOnAddAuthorClick = () => {
    setIsFormVisible(true)
  }
  const handleOnCloseFormClick = () => {
    setIsFormVisible(false)
    setUpdateAuthor(null)
    setUpdateAuthorIndex(null)
  }

  useEffect(() => {
    if (!updateAuthor && !updateAuthorIndex) {
      return;
    }
    setIsFormVisible(true);
  }, [updateAuthor, updateAuthorIndex]);

  const handleOnDeleteAuthor = (deleteIndex: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result:any) => {
      if (result.isConfirmed) {
        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.splice(deleteIndex, 1);
        setAuthors(allAuthors);
        addToast("Author Deleted", { appearance: 'success', autoDismiss: true });
      }
    })
  }

  const handleOnUpdateAuthor = (updateIndex: number) => {
    setUpdateAuthor(authors[updateIndex]);
    setUpdateAuthorIndex(updateIndex);
  }

  const handleOnAddAuthor = (name: IAuthor) => {
    const index = authors.length
    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.splice(index, 1, name);
    addToast("New Author added", { appearance: 'success', autoDismiss: true });
    setAuthors(allAuthors);
  }
  const handleOnSendUpdateAuthor = (name: IAuthor) => {
    var index = authors.length
    if (updateAuthorIndex !== null) {
      index = updateAuthorIndex
    }
    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.splice(index, 1, name);
    addToast("Author Updated", { appearance: 'success', autoDismiss: true });
    setAuthors(allAuthors);
    setUpdateAuthor(null);
    setUpdateAuthorIndex(null);
  }

  return (
    <Container fluid={true}>
      <Welcome />
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
          <BooksSection authors={authors} />
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
          <AuthorsSection authors={authors}
            isFormVisible={isFormVisible}
            addAuthor={handleOnAddAuthor}
            deleteAuthor={handleOnDeleteAuthor}
            updateAuthor={handleOnUpdateAuthor}
            addAuthorClick={handleOnAddAuthorClick}
            closeFormClick={handleOnCloseFormClick}
            updateAuthorValues={updateAuthor}
            updateAuthorIndex={updateAuthorIndex}
            sendUpdateAuthor={handleOnSendUpdateAuthor} />
        </Col>
      </Row>
    </Container>
  );
}

export default LibraryPage;
