import {todosAPI} from "../../api/todosAPI.js";

export const getTodoAction = (id) => async (dispatch) => {
    const res = await todosAPI.getById(id)
    dispatch({type: "GET_TODO", payload: res})
    return res
}