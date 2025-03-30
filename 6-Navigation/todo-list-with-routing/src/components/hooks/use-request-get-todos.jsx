import {useEffect, useState} from "react";

export const useRequestGetTodos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/todos`)
            .then(res => res.json())
            .then(res => {
                setTodos(res)
            })
            .catch(error => console.log(error))
    }, [])

    return {
        todos,
        setTodos
    }
}