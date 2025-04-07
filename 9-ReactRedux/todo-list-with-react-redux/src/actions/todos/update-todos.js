import {todosAPI} from "../../api/todosAPI.js";

export const updateTodosAction = (payload) => (dispatch) =>
    todosAPI.update(payload).then(() =>
        dispatch({type: "UPDATE_TODOS", payload: payload})
    )
