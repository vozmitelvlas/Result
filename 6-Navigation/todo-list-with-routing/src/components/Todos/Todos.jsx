import {useRequestAddTodo, useRequestOnDoneTodo, useRequestOnSearchTodo,} from "../hooks/index.js";
import styles from "./Todos.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {useState} from "react";
import {Header, TodoList} from "./components/index.js";

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
                <Header
                    onAddNewTodo={event => submitFunctionOnAddNewTodo(event)}
                    setNewTodo={setNewTodo}
                    newTodo={newTodo}
                    onSearch={onSearch}
                    sortTodos={sortTodos}
                    openerSlider={openerSlider}/>

                <TodoList
                    todos={todos}
                    onDoneTodo={onDoneTodo}
                    ExtendedLink={ExtendedLink}/>

                <Outlet></Outlet>
            </div>

        </>
    )
}