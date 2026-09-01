import {contactsReducer, groupReducer} from "../reducers";
import {createStore, combineReducers} from "redux";


const reducers = combineReducers({
    contacts: contactsReducer,
    groups: groupReducer,
});

export const store = createStore(reducers);