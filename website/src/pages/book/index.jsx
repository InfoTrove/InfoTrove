import { useContext } from "react";
import { useParams } from "react-router";
import BooksContext from "../../context/booksContext";
import NavBar from "../../components/navbar";

const BookDetail = () => {
    const { id } = useParams()
    const { books } = useContext(BooksContext)

    const book = books.find((book) => book.primary_isbn10 === id)

    if (!book) return (<h1>Loading!!</h1>)

    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <img src={book.book_image} alt="" />
                </div>
                <div>
                    <h1>{book.title}</h1>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>{book.description}</p>
                </div>
                <div>
                    <ul>
                        {
                            book.buy_links.map((links) => (
                                <li><button><a href={`${links.url}`}>{links.name}</a></button></li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default BookDetail;