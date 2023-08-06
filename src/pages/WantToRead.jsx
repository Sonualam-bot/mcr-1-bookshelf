import { useContext } from "react"
import { BookShelfContext } from "../context/BookShelfContext"
import { BookCard } from "./BookCard"
import "./BookCard.css"

export const WantToRead = () => {
    const { userWantsToRead } = useContext(BookShelfContext)
    return (
        <div className="booksContainer" >
            {userWantsToRead.length === 0 ? <p>add books you want to read</p> : userWantsToRead?.map((books) => {

                return (
                    <BookCard books={books} key={books.id} />
                )
            })}

        </div>
    )
}