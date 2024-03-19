import { useEffect } from "react";
import ArticlesContext from "./articlesContext";
import { useState } from "react";
import handleFetch from "../utils/handleFetch"

const ArticlesProvider = ( {children} ) => {
    const [books, setBooks] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`, {cache: "force-cache"}
              );
            if (data) setBooks(data.results)
            if (error) setError(error)
        }
    doFetch();
    }, [])

    const contextValue = { books }

    return (
        <ArticlesContext.Provider value={contextValue}>
            {children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesProvider;