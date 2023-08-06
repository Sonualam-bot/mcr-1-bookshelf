import { BookData } from "../data/BookData";

export const initialState = {
    booksDb: BookData,
    booksSearch: BookData,
    shelves: ""

}

export const BookReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "SHELF_VALUE":
            console.log("SHELF_VALUE", payload)
            return { ...state, shelves: payload.currentShelf }


        // case "MOVE_BOOK":
        //     console.log("MOVE_BOOK", payload);
        //     return { ...state, booksDb: payload.move };

        default:
            throw new Error(`Unknown action type  ${action.type} `)
    }
}