import {initialContacts} from "src/initialContacts";
import {ActionType} from "src/redux/types";
import {ACTIONS} from "src/constants";
import {delay} from "src/utills";
import {Dispatch} from "redux";

export const getContactsAction = () =>
    async (dispatch: Dispatch<ActionType>) => {
        dispatch({type: ACTIONS.GET_CONTACTS_REQUEST});

        const contacts = initialContacts;
        await delay(1000);

        if (contacts)
            dispatch({type: ACTIONS.GET_CONTACTS_SUCCESS, payload: {contacts}});
        else
            dispatch({type: ACTIONS.GET_CONTACTS_FAILURE, payload: {error: 'Сетевая ошибка'}});
    };
