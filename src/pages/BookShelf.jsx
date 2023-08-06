import { CurrentlyReading } from "./CurrentlyReading"
import { Read } from "./Read"
import { WantToRead } from "./WantToRead"
import "./BookCard.css"

export const BookShelf = () => {
    return (
        <>



            <div className="bookParentContainer" >
                <div className="bookIndiShelf" >
                    <h2>Currently Reading</h2>
                    <CurrentlyReading />
                </div>
                <div className="bookIndiShelf" >
                    <h2>Wants To Read</h2>
                    <WantToRead />
                </div>
                <div className="" >
                    <h2>Read</h2>
                    <Read />
                </div>
            </div>
        </>
    )
}