import {useState} from 'react'
import styles from './App.module.css'
import Todo from "./components/Todo/Todo.jsx";
import DeleteModal from "./components/ModalWindows/DeleteModal.jsx";
import NewTask from "./components/NewTask/NewTask.jsx";
import SliderButton from "./components/Slider/SliderButton.jsx";
import {
    useRequestAddTodo, useRequestDeleteTodo,
    useRequestGetTodos, useRequestOnDoneTodo,
    useRequestOnSearchTodo, useRequestUpdateTodo
} from "./components/hooks/index.js";
import SearchBlock from "./components/SearchBlock/SearchBlock.jsx";
import {AppContext} from "./context.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {Header} from "./components/Header.jsx";

function App() {
    const [openerModal, setOpenerModal] = useState(false)
    const [idForDelete, setIdForDelete] = useState(null)
    const [openerSlider, setOpenerSlider] = useState(false)

    const openCloseDeleteModal = () => setOpenerModal(!openerModal)
    const {todos, setTodos} = useRequestGetTodos()
    const {searchValue, onSearch} = useRequestOnSearchTodo(setTodos)
    const {newTodo, setNewTodo, submitFunctionOnAddNewTodo} = useRequestAddTodo(searchValue, setTodos)
    const {onDoneTodo} = useRequestOnDoneTodo(setTodos)
    const {onUpdateTodo} = useRequestUpdateTodo(setTodos)
    const {onConfirmDeleting} = useRequestDeleteTodo(setTodos, idForDelete, openCloseDeleteModal)
    const onDeleteTodo = (id) => {
        setIdForDelete(id)
        openCloseDeleteModal()
    }
    const sortTodos = (isSort) => {
        if (isSort) {
            setTodos(todos.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
        } else {
            setTodos(todos.sort((a, b) => a.id - b.id))
        }
        setOpenerSlider(isSort)
    }
    const appOptions = {
        onDone: onDoneTodo,
        onUpdate: onUpdateTodo,
        onDelete: onDeleteTodo,
        sort: sortTodos,
        onSearch: onSearch,
        setNewTodo: setNewTodo,
        openerSlider: openerSlider,
        newTodo: newTodo,
        // OnAddNewTodo: event => submitFunctionOnAddNewTodo(event) или submitFunctionOnAddNewTodo не работает
    }

    return (
        <>
            <AppContext value={appOptions}>
                <div className={styles.todoList}>
                    <Header onAddNewTodo={event => submitFunctionOnAddNewTodo(event)}/>
                    <TodoList todos={todos}/>

                    <DeleteModal
                        onNo={() => setOpenerModal(!openerModal)}
                        onYes={onConfirmDeleting}
                        open={openerModal}>
                    </DeleteModal>
                </div>
            </AppContext>

        </>
    )
}

export default App