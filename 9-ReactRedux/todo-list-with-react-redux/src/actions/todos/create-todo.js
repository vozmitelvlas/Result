import {todosAPI} from "../../api/todosAPI.js";

export const createTodoAction = async (dispatch) => {
    const res = await todosAPI.create()
    dispatch({
        type: "CREATE_TODO",
        payload: res
    })
    return res
}