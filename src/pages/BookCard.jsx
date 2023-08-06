import { useContext } from "react";
import "./BookCard.css"
import { BookShelfContext } from "../context/BookShelfContext";
export const BookCard = ({ books }) => {
    const { id, image, author, title } = books;
    const { bookCategories, handleDropDownValue } = useContext(BookShelfContext)
    return (
        <>
            <div className="booksOnShelf" key={id} >
                <img src={image} alt="bookCover" />
                <p> {title} </p>
                <p> {author} </p>
                <select
                    onChange={handleDropDownValue}
                >
                    <option>Move To...</option>

                    {bookCategories.map((cat) => {
                        return (
                            <option key={cat.id} value={cat.category} > {cat} </option>
                        )
                    })}
                    <option value="none" >None</option>
                </select>
            </div>
        </>
    )
}