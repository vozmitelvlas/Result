import {todosAPI} from "../../api/todosAPI.js";

export const deleteTodoAction = (id) => (dispatch) =>
    todosAPI.deleteById(id).then(() =>
        dispatch({
            type: "DELETE_TODO",
            payload: id
        })
    )