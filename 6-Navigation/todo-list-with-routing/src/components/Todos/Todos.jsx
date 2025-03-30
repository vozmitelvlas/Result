import {
    useRequestAddTodo,
    useRequestGetTodos,
    useRequestOnDoneTodo,
    useRequestOnSearchTodo,
    useRequestUpdateTodo
} from "../hooks/index.js";
import styles from "./Todos.module.css";
import {NavLink, Outlet} from "react-router-dom";
import SliderButton from "../Slider/SliderButton.jsx";
import NewTask from "../NewTask/NewTask.jsx";
import SearchBlock from "../SearchBlock/SearchBlock.jsx";
import {useState} from "react";

export default function Todos({setTodos, todos}) {
    const [openerSlider, setOpenerSlider] = useState(false)
    const {searchValue, onSearch} = useRequestOnSearchTodo(setTodos)
    const {newTodo, setNewTodo, submitFunctionOnAddNewTodo} = useRequestAddTodo(searchValue, setTodos)
    const {onDoneTodo} = useRequestOnDoneTodo(setTodos)
    const ExtendedLink = ({to, children, isDone}) => (
        <NavLink
            to={to}
            style={{pointerEvents: isDone ? 'none' : 'auto'}}>
            <p className={isDone ? `${styles.doneTodo} ${styles.cutLine}` : styles.cutLine}>{children}</p>
        </NavLink>
    )
    const sortTodos = (isSort) => {
        if (isSort) {
            setTodos(todos.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
        } else {
            setTodos(todos.sort((a, b) => a.id - b.id))
        }
        setOpenerSlider(isSort)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <SearchBlock
                        onSearch={event => onSearch(event)}
                    ></SearchBlock>
                    <NewTask
                        setNewTodo={setNewTodo}
                        newTodo={newTodo}
                        onAddNewTodo={event => submitFunctionOnAddNewTodo(event)}
                    ></NewTask>
                    <div className={styles.sort}>
                        <h3>Сортировать</h3>
                        <SliderButton
                            sort={sortTodos}
                            setOpenerSlider={setOpenerSlider}
                            openerSlider={openerSlider}
                        ></SliderButton>
                    </div>
                </div>
                <div className={styles.todoList}>
                    {todos.map(todo => (
                        <div className={styles.mainTitle} key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={({target}) => onDoneTodo(target.checked, todo.id)}/>
                            <div>
                                <ExtendedLink to={`/task/${todo.id}`}
                                              isDone={todo.completed}>{todo.title}</ExtendedLink>
                            </div>
                        </div>
                    ))}
                </div>
                <Outlet></Outlet>
            </div>

        </>
    )
}