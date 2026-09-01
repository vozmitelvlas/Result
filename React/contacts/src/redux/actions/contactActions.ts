import {PROJECT_ACTIONS} from "src/redux/actions/actionTypes";
import {initialContacts} from "src/initialContacts";
import {ActionType} from "src/redux/types";
import {Dispatch} from "redux";
import {delay} from "src/utills";

export const getContactsAction = () =>
    async (dispatch: Dispatch<ActionType>) => {
        dispatch({type: PROJECT_ACTIONS.GET_CONTACTS_REQUEST});

        const contacts = initialContacts;
        await delay(1000);

        if (contacts)
            dispatch({type: PROJECT_ACTIONS.GET_CONTACTS_SUCCESS, payload: {contacts}});
        else
            dispatch({type: PROJECT_ACTIONS.GET_CONTACTS_FAILURE, payload: {error: 'Сетевая ошибка'}});
    };
