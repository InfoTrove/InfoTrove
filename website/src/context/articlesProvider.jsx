import { useEffect } from "react";
import ArticlesContext from "./articlesContext";
import { useState } from "react";
import handleFetch from "../utils/handleFetch"

const ArticlesProvider = ( {children} ) => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch(
                `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`
              );
            if (data) setArticles(data.results)
            if (error) setError(error)
        }
    doFetch();
    }, [])

    const contextValue = { articles }

    return (
        <ArticlesContext.Provider value={contextValue}>
            {children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesProvider;