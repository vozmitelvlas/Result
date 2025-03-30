import {useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";

export const useRequestGetSpecificTodo = (id, setTitle) => {
    const [todo, setTodo] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:3000/todos/${id}`)
            .then(res => res.json())
            .then(res => {
                if(Object.keys(res).length === 0){
                    navigate('/404')
                }
                setTodo(res)
                setTitle(res.title)
            })
            .catch(error => {
                setTodo(null)
            })
    }, [id])

    return {
        todo,
        setTodo
    }
}