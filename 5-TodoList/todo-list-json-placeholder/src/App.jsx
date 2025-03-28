import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(res => setTodos(res))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                <div className="todoList">
                    <h1>Todo list:</h1>
                    {todos.map(todo => (
                        <div key={todo.id} className="todo">
                            {todo.id}) {todo.title}
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default App
