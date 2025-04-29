const todoInitialState = {
    id: "",
    completed: false,
    title: "",
    newTitle: ""
}

export const todoReducer = (state = todoInitialState, action) => {
    switch (action.type){
        case "GET_TODO":
            return {
                ...state,
                ...action.payload
            }

        case "SET_TODO_TITLE":
            return {
                ...state,
                newTitle: action.payload
            }
        default:
            return state
    }
}