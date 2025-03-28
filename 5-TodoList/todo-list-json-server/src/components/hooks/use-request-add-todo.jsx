import {useState} from "react";

export const useRequestAddTodo = (searchValue, setTodos) => {
    const [newTodo, setNewTodo] = useState("")

    const isSubstring = (str1, str2) => {
        str1 = str1.toLowerCase()
        str2 = str2.toLowerCase()
        return str1.includes(str2) || str2.includes(str1)
    }

    const submitFunctionOnAddNewTodo = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/todos`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: newTodo,
                completed: false,
            })
        })
            .then(res => res.json())
            .then(res => {
                if (!searchValue)
                    setTodos(prevState => [...prevState, res])
                else if (isSubstring(res.title, searchValue)){
                    setTodos(prevState => [...prevState, res])
                }
            })
            .catch(error => console.log(error))
            .finally(() => setNewTodo(""))
    }

    return {
        newTodo,
        setNewTodo,
        submitFunctionOnAddNewTodo
    }
}