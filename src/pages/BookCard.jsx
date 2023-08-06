import { useContext } from "react";
import "./BookCard.css"
import { BookShelfContext } from "../context/BookShelfContext";
export const BookCard = ({ books }) => {
    const { id, image, author, title, category } = books;
    const { bookCategories, handleDropDownValue } = useContext(BookShelfContext)
    return (
        <>
            <div className="booksOnShelf" key={id} >
                <img src={image} alt="bookCover" />
                <p> {title} </p>
                <p> {author} </p>
                <select
                    className="select-dropdown"
                    onChange={(e) => handleDropDownValue(e, id)}
                    value={category}
                >
                    <option>Move To...</option>

                    {bookCategories.map((cat) => {
                        return (
                            <option key={cat} value={cat} name={cat} > {cat} </option>
                        )
                    })}
                    <option value="none" >None</option>
                </select>
            </div>
        </>
    )
}