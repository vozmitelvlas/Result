import {todosAPI} from "../../api/todosAPI.js";

export const getTodosAction = (dispatch) =>
    todosAPI.read().then(res =>
        dispatch({type: "GET_TODOS", payload: res})
    )