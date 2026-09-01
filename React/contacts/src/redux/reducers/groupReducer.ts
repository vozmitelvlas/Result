import {GROUPS} from "src/__data__";
import {ActionType} from "src/redux/types";

export const groupReducer = (state = GROUPS, action: ActionType) => {
    switch (action.type) {
        default:
            return state;
    }
};