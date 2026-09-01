import {PROJECT_ACTIONS} from "src/redux/actions/actionTypes";
import {ActionType} from "src/redux/types";

const initialState = {
    contacts: [],
    isLoading: true,
    error: null,
};

export const contactsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case PROJECT_ACTIONS.GET_CONTACTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case PROJECT_ACTIONS.GET_CONTACTS_SUCCESS:
            return {
                contacts: [...action.payload.contacts],
                isLoading: false,
                error: false,
            };
        case PROJECT_ACTIONS.GET_CONTACTS_FAILURE:
            return {
                contacts: [...state.contacts],
                isLoading: false,
                error: action.payload.error,
            };

        default:
            return state;
    }
};