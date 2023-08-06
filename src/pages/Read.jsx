import { useContext } from "react"
import { BookShelfContext } from "../context/BookShelfContext"
import { BookCard } from "./BookCard"
import "./BookCard.css"

export const Read = () => {
    const { userHasRead } = useContext(BookShelfContext)
    return (
        <div className="booksContainer" >
            {userHasRead?.map((books) => {

                return (
                    <BookCard books={books} key={books.id} />
                )
            })}

        </div>
    )
}