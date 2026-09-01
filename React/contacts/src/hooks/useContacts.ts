import {useAppDispatch, useAppSelector} from "src/redux";
import {useEffect} from "react";
import {getContactsAction} from "src/redux/actions/contactActions";

export const useContacts = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.contacts);

    useEffect(() => {
        dispatch(getContactsAction());
    }, [dispatch]);

    return state;
};