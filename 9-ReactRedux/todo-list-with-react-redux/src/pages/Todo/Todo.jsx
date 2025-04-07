import styles from "./Todo.module.css"
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import DeleteModal from "../components/ModalWindows/DeleteModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {updateTodosAction, deleteTodoAction} from "../../actions/todos";
import {getTodoAction, setTodoTitleAction} from "../../actions/todo";
import {setModalStateAction, setMessageAction} from "../../actions/options";
import {selectTodoTitle} from "../../selectors/todo-selectors.js";
import {selectIsModalWindow, selectMessage} from "../../selectors/options-selectors.js";


export default function Todo() {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const newTitle = useSelector(selectTodoTitle)
    const isModalWindow = useSelector(selectIsModalWindow)
    const message = useSelector(selectMessage)

    useEffect(() => {
        dispatch(getTodoAction(id)).then(res => dispatch(setTodoTitleAction(res.title)))
        dispatch(setModalStateAction(false))
        dispatch(setMessageAction(""))
    }, [])

    const onChangeTitle = ({target}) => dispatch(setTodoTitleAction(target.value))

    const onSaveTitle = async () => {
        if(newTitle){
            await dispatch(updateTodosAction({id, title: newTitle, completed: false}))
            dispatch(setMessageAction("Изменения сохранены"))
        } else {
            dispatch(setMessageAction("Поле должно быть заполнено"))
        }
    }
    const onConfirmDelete = async () => {
        await dispatch(deleteTodoAction(id))
        navigate("/")
    }
    const onDelete = () => dispatch(setModalStateAction(!isModalWindow))
    const toMainPage = () => navigate("/")


    return (
        <>
            <div className={styles.todo}>
                <div className={styles.textareaContainer}>
                    <textarea value={newTitle} onChange={onChangeTitle}></textarea>
                </div>

                <div>
                    <p>{message}</p>
                </div>
                <div className={styles.options}>
                    <button onClick={toMainPage}>Назад</button>
                    <button onClick={onDelete}>Удалить</button>
                    <button onClick={onSaveTitle}>Сохранить</button>
                </div>
            </div>

            <DeleteModal
                onNo={onDelete}
                onYes={onConfirmDelete}
                open={isModalWindow}/>
        </>
    )
}