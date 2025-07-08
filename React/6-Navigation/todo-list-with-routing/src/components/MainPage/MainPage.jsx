import styles from "./Todos.module.css";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Header, TodoList} from "./components/index.js";
import {todosAPI} from "../../api/todosAPI.js";

export default function MainPage() {
    const navigate = useNavigate()
    const [isSort, setIsSort] = useState(false)
    const [todos, setTodos] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [newTodo, setNewTodo] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)

    useEffect(() => {
        todosAPI.read().then(res => {
            setTodos(res)
        })
        setIsCompleted(false)
    }, [isCompleted])

    const onAdd = async () => {
        const res = await todosAPI.create()
        navigate("/task/" + res.id)
    }
    const onDone = async (id, done) => {
        await todosAPI.complete({id, completed: done})
        setIsCompleted(true)
    }
    const onSearch = ({target}) => {
        setSearchValue(target.value)
    }

    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()))
    const sortedTodos = isSort ? [...filteredTodos].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())) : filteredTodos

    return (
        <>
            <div className={styles.container}>
                <Header
                    setTodos={setTodos}
                    searchValue={searchValue}
                    setIsSort={setIsSort}
                    openerSlider={isSort}
                    onSearch={onSearch}
                    onAdd={onAdd}
                    setNewTodo={setNewTodo}
                    newTodo={newTodo}/>

                <TodoList
                    todos={sortedTodos}
                    onDone={onDone}/>
            </div>

        </>
    )
}