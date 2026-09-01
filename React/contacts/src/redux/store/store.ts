import {createStore, combineReducers, applyMiddleware} from "redux";
import {contactsReducer, groupReducer} from "../reducers";
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    groups: groupReducer,
});

export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk)
);
export type RootState = ReturnType<typeof rootReducer>
