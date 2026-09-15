import {ActionType} from "src/redux/types";
import {ACTIONS} from "src/constants";

const initialState = {
    groups: [],
    isLoading: false,
    error: null
};

export const groupReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ACTIONS.GET_GROUPS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case ACTIONS.GET_GROUPS_SUCCESS:
            return {
                groups: [...action.payload.groups],
                isLoading: false,
                error: null,
            };
        case ACTIONS.GET_GROUPS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};