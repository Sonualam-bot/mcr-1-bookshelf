import { BookData } from "../data/BookData";

export const initialState = {
    booksDb: BookData,
    booksSearch: BookData,
    shelves: "",
    bookId: "",
    searchInput: ""

}

export const BookReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "MOVE_BOOKS":
            return { ...state, booksDb: payload.move };
        case "SEARCH_BOOK":
            return { ...state, searchInput: payload.search }

        default:
            throw new Error(`Unknown action type  ${action.type} `)
    }
}