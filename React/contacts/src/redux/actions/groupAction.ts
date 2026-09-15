import {initialGroups} from "src/initialGroups";
import {ActionType} from "src/redux/types";
import {ACTIONS} from "src/constants";
import {delay} from "src/utills";
import {Dispatch} from "redux";

export const getGroupsAction = () =>
    async (dispatch: Dispatch<ActionType>) => {
        dispatch({type: ACTIONS.GET_GROUPS_REQUEST});

        const groups = initialGroups;
        await delay(1000);

        if (groups)
            dispatch({type: "GET_GROUPS_SUCCESS", payload: {groups}});
        else
            dispatch({type: "GET_CONTACTS_FAILURE", payload: {error: 'Сетевая ошибка'}});
    };