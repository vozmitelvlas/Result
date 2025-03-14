export const useRequestUpdateTodo = (setTodos) => {
    const onUpdateTodo = (event, id, title) => {
        event.preventDefault()
        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                completed: false,
            })
        })
            .then(res => res.json())
            .then(res =>
                setTodos(prevState =>
                    prevState.map((todo) =>
                        todo.id === res.id ? res : todo
                    )
                ))
            .catch(error => console.log(error))
    }
    return{
        onUpdateTodo
    }
}