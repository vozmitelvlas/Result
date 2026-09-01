import {useEffect} from "react";
import {getContactsAction} from "src/redux/actions";
import {useAppDispatch, useAppSelector} from "src/redux";

export const useContacts = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.contacts);

    useEffect(() => {
        dispatch(getContactsAction());
    }, [dispatch]);

    return state;
};