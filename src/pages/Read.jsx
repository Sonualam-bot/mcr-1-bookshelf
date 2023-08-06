import { useContext } from "react"
import { BookShelfContext } from "../context/BookShelfContext"
import { BookCard } from "./BookCard"
import "./BookCard.css"

export const Read = () => {
    const { userHasRead } = useContext(BookShelfContext)
    return (
        <div className="booksContainer" >
            {userHasRead.length === 0 ? <p>You haven't read books yet</p> : userHasRead?.map((books) => {

                return (
                    <BookCard books={books} key={books.id} />
                )
            })}

        </div>
    )
}