import {ACTIONS} from "src/constants/actionTypes";
import {ContactDto} from "src/types/dto/ContactDto";
import {GroupDto} from "src/types/dto/GroupDto";

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


export type ActionType =
    | GET_CONTACTS_REQUEST
    | GET_CONTACTS_SUCCESS
    | GET_CONTACTS_FAILURE
    | GET_GROUPS_SUCCESS
    | GET_GROUPS_REQUEST
    | GET_GROUPS_FAILURE