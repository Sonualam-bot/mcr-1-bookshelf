import { createContext, useReducer } from "react";
import { BookReducer, initialState } from "../reducer/BookReducer";

export const BookShelfContext = createContext();

export const BookShelfContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BookReducer, initialState)


    const handleMoving = (bookshelf, bookId) => {
        const moveBooks =
            state.booksDb.map((book) => book.id === bookId ?
                //here to send books in different shelves i am using map method to match the books with the id 
                { ...book, category: bookshelf } : book)
        // if it matches the id i am manipulating the category with the selected shelf category if not i am returning the book
        dispatch({
            type: "MOVE_BOOKS",
            payload: {
                move: moveBooks
            }
        })
        //with dispatch i am setting the books new category in the reducer for the booksDb array
    }

    //getting the value of the dropdown
    const handleDropDownValue = (e, bookId) => {
        const bookShelfValue = e.target.value
        handleMoving(bookShelfValue, bookId)
    }


    //separate section for books
    const userIsCurrentlyReading = state.booksDb.filter(({ category }) => category === "currentlyReading")
    const userWantsToRead = state.booksDb.filter(({ category }) => category === "wantToRead")
    const userHasRead = state.booksDb.filter(({ category }) => category === "read")

    //separate categories for books
    const bookCategories = state.booksSearch.reduce((acc, curr) => {
        if (acc.includes(curr.category)) {
            return acc
        } else {
            return [...acc, curr.category]
        }
    }, [])


    const handleBookSearch = (e) => {
        dispatch({
            type: 'SEARCH_BOOK',
            payload: {
                search: e.target.value
            }
        })
    }

    const searchBooksByTitle = state.booksDb.filter((book) => book.title.toLowerCase().includes(state.searchInput.toLowerCase()))




    const value = {
        state,
        userIsCurrentlyReading,
        userWantsToRead,
        userHasRead,
        bookCategories,
        handleDropDownValue,
        handleBookSearch,
        searchBooksByTitle
    }


    return (
        <BookShelfContext.Provider value={value} >
            {children}
        </BookShelfContext.Provider>
    )
}