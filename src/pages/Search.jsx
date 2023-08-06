import { useContext } from "react"
import "./BookCard.css"
import { BookShelfContext } from "../context/BookShelfContext"
import { BookCard } from "./BookCard"

export const Search = () => {
    const { handleBookSearch, searchBooksByTitle } = useContext(BookShelfContext)
    return (
        <>
            <div className="searchContainer">
                <input type="text" placeholder="search by title" onChange={handleBookSearch} />
            </div>

            <div className="booksContainer" >
                {searchBooksByTitle?.map((books) => {

                    return (
                        <BookCard books={books} key={books.id} />
                    )
                })}

            </div>

        </>

    )
}