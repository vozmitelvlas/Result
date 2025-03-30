import Todo from "./Todo/Todo.jsx";

export const TodoList = ({todos}) => {
    return (
        <>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    toDoId={todo.id}
                    isDone={todo.completed}
                >{todo.title}</Todo>
            ))}
        </>
    )
}