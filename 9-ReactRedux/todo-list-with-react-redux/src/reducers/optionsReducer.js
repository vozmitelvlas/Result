const optionsInitialState = {
    isSort: false,
    isModalWindow: false,
    searchValue: "",
    newTitleValue: "",
    message: "",
}
export const optionsReducer = (state = optionsInitialState, action) => {
    switch (action.type){
        case "CHANGE_SORTING":
            return {
                ...state,
                isSort: action.payload
            }

        case "SET_SEARCH_VALUE":
            return {
                ...state,
                searchValue: action.payload
            }

        case "SET_MODAL_STATE":
            return {
                ...state,
                isModalWindow: action.payload
            }

        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload
            }

        default:
            return state
    }
}