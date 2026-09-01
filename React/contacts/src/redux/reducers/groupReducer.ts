import {GROUPS} from "src/__data__";

export const groupReducer = (state = GROUPS, payload) => {
    console.log("groupReducer payload - ", payload);
    switch (payload.type) {
        default:
            return state;
    }
};