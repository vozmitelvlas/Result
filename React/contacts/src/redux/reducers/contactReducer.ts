import {CONTACTS} from "src/__data__";

export const contactsReducer = (state = CONTACTS, payload) => {
    console.log("contactsReducer payload - ", payload);
    switch (payload.type) {
        default:
            return state;
    }
};