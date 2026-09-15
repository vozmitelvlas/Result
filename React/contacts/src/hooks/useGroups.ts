import {useAppDispatch, useAppSelector} from "src/redux";
import {getGroupsAction} from "src/redux/actions";
import {useEffect} from "react";

export const useGroups = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.groups);

    useEffect(() => {
        dispatch(getGroupsAction());
    }, [dispatch]);

    return state;
};