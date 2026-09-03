import {ContactDto, GroupDto} from "src/types";
import {ACTIONS} from "src/constants";

interface GET_CONTACTS_SUCCESS {
    type: typeof ACTIONS.GET_CONTACTS_SUCCESS,
    payload: {
        contacts: ContactDto[]
    }
}

interface GET_CONTACTS_REQUEST {
    type: typeof ACTIONS.GET_CONTACTS_REQUEST,
}

interface GET_CONTACTS_FAILURE {
    type: typeof ACTIONS.GET_CONTACTS_FAILURE;
    payload: {
        error: string
    };
}

interface GET_GROUPS_SUCCESS {
    type: typeof ACTIONS.GET_GROUPS_SUCCESS,
    payload: {
        groups: GroupDto[]
    }
}

interface GET_GROUPS_REQUEST {
    type: typeof ACTIONS.GET_GROUPS_REQUEST,
}

interface GET_GROUPS_FAILURE {
    type: typeof ACTIONS.GET_GROUPS_FAILURE;
    payload: {
        error: string
    };
}

interface FILTER_CONTACTS {
    type: typeof ACTIONS.FILTER_CONTACTS,
    payload: {
        contacts: ContactDto[]
    }
}


export type ActionType =
    | GET_CONTACTS_REQUEST
    | GET_CONTACTS_SUCCESS
    | GET_CONTACTS_FAILURE
    | GET_GROUPS_SUCCESS
    | GET_GROUPS_REQUEST
    | GET_GROUPS_FAILURE
    | FILTER_CONTACTS