import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "src/redux/store/store";
import {ActionType} from "src/redux/types";
import {ThunkDispatch} from "redux-thunk";

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, ActionType>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;