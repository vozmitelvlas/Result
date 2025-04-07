import styles from "../Todos.module.css";
import {NavLink} from "react-router-dom";

export const TodoList = ({todos, onDone}) => {
    const ExtendedLink = ({to, children, isDone}) => (
        <NavLink to={to} style={{pointerEvents: isDone ? 'none' : 'auto'}}>
            <p className={isDone ? `${styles.doneTodo} ${styles.cutLine}` : styles.cutLine}>{children}</p>
        </NavLink>
    )

    return (
        <>
            <div className={styles.todoList}>
                {todos.map(todo => (
                    <div className={styles.mainTitle} key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={({target}) => onDone(todo.id, target.checked)}/>
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