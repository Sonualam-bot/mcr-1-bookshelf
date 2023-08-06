import { createContext, useReducer } from "react";
import { BookReducer, initialState } from "../reducer/BookReducer";

export const BookShelfContext = createContext();

export const BookShelfContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BookReducer, initialState)


    const handleMoving = state.shelves === "" ? state.booksDb : state.booksDb.filter((book) => {
        return (
            book.category === state.shelves

        )
    })

    console.log(handleMoving)


    const userIsCurrentlyReading = handleMoving.filter(({ category }) => category === "currentlyReading")
    const userWantsToRead = handleMoving.filter(({ category }) => category === "wantToRead")
    const userHasRead = handleMoving.filter(({ category }) => category === "read")

    const bookCategories = state.booksDb.reduce((acc, curr) => {
        if (acc.includes(curr.category)) {
            return acc
        } else {
            return [...acc, curr.category]
        }
    }, [])


    const handleDropDownValue = (e) => {
        dispatch({
            type: "SHELF_VALUE",
            payload: {
                shelf: e.target.value
            }
        })
    }




    const value = {
        userIsCurrentlyReading,
        userWantsToRead,
        userHasRead,
        bookCategories,
        handleDropDownValue
    }


    return (
        <BookShelfContext.Provider value={value} >
            {children}
        </BookShelfContext.Provider>
    )
}