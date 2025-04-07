import styles from "./Todos.module.css";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Header, TodoList} from "./components/index.js";
import {useSelector, useDispatch} from "react-redux";
import {doneTodoActon, createTodoAction, getTodosAction} from "../../actions/todos/index.js";
import {setSearchValueAction} from "../../actions/options/index.js";
import {selectTodos} from "../../selectors/todos-selectors.js";
import {selectIsSort, selectSearchValue} from "../../selectors/options-selectors.js";

export default function MainPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)
    const isSort = useSelector(selectIsSort)
    const searchValue = useSelector(selectSearchValue)

    useEffect(() => {
        dispatch(getTodosAction)
    }, [])

    const onAdd = async () => {
        const newTodo = await dispatch(createTodoAction)
        navigate("/task/" + newTodo.id)
    }
    const onDone = async (id, completed) => await dispatch(doneTodoActon({id, completed}))

    const onSearch = ({target}) => dispatch(setSearchValueAction(target.value))

    const filteredTodos = todos?.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()))
    const sortedTodos = isSort ? [...filteredTodos].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())) : filteredTodos

    return (
        <div className={styles.container}>
            <Header
                searchValue={searchValue}
                onSearch={onSearch}
                onAdd={onAdd}/>

            <TodoList
                todos={sortedTodos}
                onDone={onDone}/>
        </div>
    )
}