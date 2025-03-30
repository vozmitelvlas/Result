import styles from "../Todos.module.css";

export const TodoList = ({todos, onDoneTodo, ExtendedLink}) => {
    return (
        <>
            <div className={styles.todoList}>
                {todos.map(todo => (
                    <div className={styles.mainTitle} key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={({target}) => onDoneTodo(target.checked, todo.id)}/>
                        <div>
                            <ExtendedLink to={`/task/${todo.id}`} isDone={todo.completed}>
                                {todo.title}
                            </ExtendedLink>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}