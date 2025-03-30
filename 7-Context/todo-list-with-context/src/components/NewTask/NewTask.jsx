import styles from "./NewTask.module.css"
import {useContext} from "react";
import {AppContext} from "../../context.jsx";

export default function NewTask({onAddNewTodo}){
    const {setNewTodo, newTodo, /*onAddNewTodo*/} = useContext(AppContext)
    return(
        <>
            <form onSubmit={onAddNewTodo} className={styles.newTask}>
                <input
                    type="text"
                    placeholder="Посадить дерево"
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                    required
                />
                <button type="submit">Добавить задачу</button>
            </form>
        </>
    )
}