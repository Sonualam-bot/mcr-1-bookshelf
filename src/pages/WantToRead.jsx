import { useContext } from "react"
import { BookShelfContext } from "../context/BookShelfContext"
import { BookCard } from "./BookCard"
import "./BookCard.css"

export const WantToRead = () => {
    const { userWantsToRead } = useContext(BookShelfContext)
    return (
        <div className="booksContainer" >
            {userWantsToRead?.map((books) => {

                return (
                    <BookCard books={books} key={books.id} />
                )
            })}

        </div>
    )
}