import { useContext } from "react";
import { useParams } from "react-router";

const BookDetail = () => {
    const {products} = useContext
    return (
        <h1>this is for book detail</h1>
    )
}

export default BookDetail;