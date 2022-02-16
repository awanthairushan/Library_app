import React, { useState, useEffect } from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import BooksList from './BooksList';
import BooksForm from './BooksForm';
import AddBook from './AddBook';
import { IBook, IAuthor } from "../../types/libraryTypes";
import { useToasts } from 'react-toast-notifications';

type BooksSectionProps = {
    authors: IAuthor[]
}
const BooksSection: React.FC<BooksSectionProps> = (props) => {

    const { addToast } = useToasts()

    const Books: IBook[] = []

    const [books, setBooks] = useState(Books);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [updateBook, setUpdateBook] = useState<IBook | null>(null);
    const [updateBookIndex, setUpdateBookIndex] = useState<number | null>(null);

    useEffect(() => {
        if (!updateBook && !updateBookIndex) {
            return;
        }
        setIsFormVisible(true);
    }, [updateBook, updateBookIndex]);

    const handleOnAddBookClick = () => {
        setIsFormVisible(true)
    }
    const handleOnCloseFormClick = () => {
        setIsFormVisible(false)
        setUpdateBook(null)
        setUpdateBookIndex(null)
    }

    const handleOnDeleteBook = (deleteIndex: number) => {
        const userConfirmation = window.confirm("Delete this Book?");
        const index = books.length
        if (userConfirmation === true) {
            const allBooks: IBook[] = books.slice();
            allBooks.splice(deleteIndex, 1);
            setBooks(allBooks);
            addToast("Book Deleted", { appearance: 'success', autoDismiss: true });
        }
    }

    const handleOnUpdateBook = (updateIndex: number) => {
        setUpdateBook(books[updateIndex]);
        setUpdateBookIndex(updateIndex);
    }

    const handleOnAddBook = (book: IBook) => {
        const index = books.length
        const allBooks: IBook[] = books.slice();
        allBooks.splice(index, 1, book);
        addToast("New Author added", { appearance: 'success', autoDismiss: true });
        setBooks(allBooks);
    }

    const handleOnSendUpdateBook = (name: IBook) => {
        var index = books.length
        if (updateBookIndex !== null) {
            index = updateBookIndex
        }
        const allBooks: IBook[] = books.slice();
        allBooks.splice(index, 1, name);
        addToast("Book Updated", { appearance: 'success', autoDismiss: true });
        setBooks(allBooks);
        setUpdateBook(null);
        setUpdateBookIndex(null);
    }

    return (
        <Row className="booksSection">
            <Col sm={12}>
                <h1 className="mt-2 pb-2">Books</h1>
            </Col>
            <Col className="" sm={12}>
                <BooksList books={books}
                    deleteBook={handleOnDeleteBook}
                    updateBook={handleOnUpdateBook} />
            </Col>
            <Col>
                <AddBook onAddClick={handleOnAddBookClick} />
            </Col>
            <Col className="" xs={12}>
                {isFormVisible && <BooksForm onCloseClick={handleOnCloseFormClick}
                    addBook={handleOnAddBook}
                    options={props.authors}
                    updateBookValues={updateBook}
                    updateBookIndex={updateBookIndex}
                    sendUpdateBook={handleOnSendUpdateBook} />}
            </Col>
        </Row>
    );
}

export default BooksSection;
