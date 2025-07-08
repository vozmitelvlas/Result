import {useState} from "react";

export const useRequestOnSearchTodo = (setTodos) => {
    const [searchValue, setSearchValue] = useState("")

    const onSearch = ({target}) => {
        setSearchValue(target.value)
        fetch(`http://localhost:3000/todos`)
            .then(res => res.json())
            .then(res => setTodos(
                res.filter(todo => {
                    if (todo.title.toLowerCase().includes(target.value.toLowerCase()))
                        return todo
                })
            ))
            .catch(error => console.log(error))
    }
    return {
        searchValue,
        onSearch
    }
}