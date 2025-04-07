import {todosAPI} from "../../api/todosAPI.js";

export const doneTodoActon = (payload) => async (dispatch) => {
    const res = await todosAPI.complete(payload)
    dispatch({
        type: "DONE_TODO",
        payload: res,
    })
}