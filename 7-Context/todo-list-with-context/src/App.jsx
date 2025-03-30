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
        if(isSort) {
            setTodos(todos.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
        }
        else{
            setTodos(todos.sort((a, b) => a.id - b.id))
        }
        setOpenerSlider(isSort)
    }

    return (
        <>
            <AppContext value={{onDone: onDoneTodo, onUpdate: onUpdateTodo, onDelete: onDeleteTodo, sort: sortTodos}}>
                <div className={styles.todoList}>
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
                            openerSlider={openerSlider}
                        ></SliderButton>
                    </div>
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            toDoId={todo.id}
                            isDone={todo.completed}
                        >{todo.title}</Todo>
                    ))}
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