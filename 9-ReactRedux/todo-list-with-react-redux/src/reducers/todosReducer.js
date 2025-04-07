import {replaceById} from "../utils/replaceById.js";
import {deleteById} from "../utils/deleteById.js";

const todosInitialState = []

export const todosReducer = (state = todosInitialState, action) => {
    switch (action.type) {
        case "GET_TODOS":
            return action.payload

        case "UPDATE_TODO":
            return replaceById(state, action.payload)

        case "CREATE_TODO":
            return [...state, action.payload]

        case "DONE_TODO":
            return  replaceById(state, action.payload)

        case "DELETE_TODO":
            return deleteById(state, action.payload)
        default:
            return state
    }
}