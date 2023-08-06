import { NavLink } from "react-router-dom"
import "./BookCard.css"
export const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <NavLink to="/" className="homelink">
                    <u><h1>BookShelf</h1></u>
                </NavLink>

                <NavLink to="/search" className="navlink">Search Here </NavLink>
            </div>
        </>
    )
}