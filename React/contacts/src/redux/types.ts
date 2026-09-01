import {PROJECT_ACTIONS} from "src/redux/actions/actionTypes";
import {ContactDto} from "src/types/dto/ContactDto";

interface GET_CONTACTS_SUCCESS {
    type: typeof PROJECT_ACTIONS.GET_CONTACTS_SUCCESS,
    payload: {
        contacts: ContactDto[]
    }
}

interface GET_CONTACTS_REQUEST {
    type: typeof PROJECT_ACTIONS.GET_CONTACTS_REQUEST,
}

interface GET_CONTACTS_FAILURE {
    type: typeof PROJECT_ACTIONS.GET_CONTACTS_FAILURE;
    payload: {
        error: string
    };
}


export type ActionType =
    | GET_CONTACTS_REQUEST
    | GET_CONTACTS_SUCCESS
    | GET_CONTACTS_FAILURE