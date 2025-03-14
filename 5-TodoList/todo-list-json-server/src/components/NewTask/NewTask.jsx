import styles from "./NewTask.module.css"

export default function NewTask({newTodo, setNewTodo, onAddNewTodo}){
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