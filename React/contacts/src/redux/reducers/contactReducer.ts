import {ActionType} from "src/redux/types";
import {ACTIONS} from "src/constants";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    filteredContacts: []
};

export const contactsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ACTIONS.GET_CONTACTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case ACTIONS.GET_CONTACTS_SUCCESS:
            return {
                contacts: [...action.payload.contacts],
                isLoading: false,
                error: false,
            };
        case ACTIONS.GET_CONTACTS_FAILURE:
            return {
                contacts: [...state.contacts],
                isLoading: false,
                error: action.payload.error,
            };

        case ACTIONS.FILTER_CONTACTS:
            return {
                ...state,
                filteredContacts: action.payload.contacts
            };

        default:
            return state;
    }
};