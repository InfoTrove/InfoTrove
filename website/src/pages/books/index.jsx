import { useState, useEffect } from "react";
import handleFetch from "../../utils/handleFetch";
import NavBar from "../../components/navbar";
import { Button, Card } from 'react-bootstrap';

const Books = ( ) => {
    const [books, setBooks] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp")
            if (data) setBooks(data.results.books)
            if (error) setError(error)
        }
        doFetch();
    }, [])
    console.log(books)
    return (
        <div>
            <NavBar/>
            <ul className="flex flex-wrap gap-10 p-[50px]">
                {
                    books?.map((book) => (
                        <Card style={{ width: '18rem' }} className="border-solid">
                        <Card.Img variant="top" src={book.book_image} className="size-28" />
                        <Card.Body>
                          <Card.Title>{book.Title}</Card.Title>
                          <Card.Text>
                            {book.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))
                }
            </ul>
        </div>
    )
}

export default Books;