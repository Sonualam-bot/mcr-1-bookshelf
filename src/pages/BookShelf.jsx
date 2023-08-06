import { CurrentlyReading } from "./CurrentlyReading"
import { Read } from "./Read"
import { WantToRead } from "./WantToRead"
import "./BookCard.css"

export const BookShelf = () => {
    return (
        <>
            <u><h1>BookShelf</h1></u>

            <div className="bookParentContainer" >
                <div>
                    <h2>Currently Reading</h2>
                    <CurrentlyReading />
                </div>
                <div>
                    <h2>Wants To Read</h2>
                    <WantToRead />
                </div>
                <div>
                    <h2>Read</h2>
                    <Read />
                </div>
            </div>
        </>
    )
}