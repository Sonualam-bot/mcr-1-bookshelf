import { useContext } from "react"
import { BookShelfContext } from "../context/BookShelfContext"
import { BookCard } from "./BookCard"
import "./BookCard.css"

export const CurrentlyReading = () => {
    const { userIsCurrentlyReading } = useContext(BookShelfContext)
    return (
        <div className="booksContainer" >
            {userIsCurrentlyReading?.map((books) => {

                return (
                    <BookCard books={books} key={books.id} />
                )
            })}

        </div>
    )
}