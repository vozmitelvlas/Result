import {useNavigate} from "react-router-dom";

export const useRequestOnDoneTodo = (setTodos) => {
    const navigate = useNavigate()
    const onDoneTodo = (completed, id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                completed: completed,
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
            .finally(() => navigate("/"))
    }
    return {
        onDoneTodo
    }
}