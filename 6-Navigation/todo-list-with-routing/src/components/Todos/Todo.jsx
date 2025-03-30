import deleteLogo from "../../assets/delete.svg"
import editLogo from "../../assets/edit.svg"
import styles from "./Todo.module.css"
import {useEffect, useState} from "react";
import {Navigate, NavLink, useNavigate, useParams} from "react-router-dom";
import {useRequestGetSpecificTodo} from "../hooks/use-request-get-specific-todo.jsx";
import {useRequestDeleteTodo, useRequestUpdateTodo} from "../hooks/index.js";
import DeleteModal from "../ModalWindows/DeleteModal.jsx";

export default function Todo({setTodos, isDone}) {
    const {id} = useParams()
    const [openerModal, setOpenerModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState("")
    const openCloseDeleteModal = () => setOpenerModal(!openerModal)
    const navigate = useNavigate()

    const {todo, setTodo} = useRequestGetSpecificTodo(id, setTitle)


    const {onUpdateTodo} = useRequestUpdateTodo(setTodos)

    const onConfirmDelete = async () => {
        try {
            await fetch(`http://localhost:3000/todos/${id}`, {method: 'DELETE'})
            setTodos((prevState) =>
                prevState.filter((todo) => todo.id !== Number(id))
            )
            openCloseDeleteModal()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    const onSaveClick = (event) => {
        onUpdateTodo(event, todo.id, title)
        setIsEdit(!isEdit)
    }

    return (
        <>
            <div className={styles.todo}>
                {isEdit ? (
                    <form onSubmit={onSaveClick} className={styles.form}>
                        <input type="text" value={title} onChange={({target}) => setTitle(target.value)}/>
                        <button type="submit" className={styles.saveBut}>
                            Сохранить
                        </button>
                    </form>
                ) : (
                    <div>
                        <p className={styles.text}>{title}</p>
                    </div>
                )}
                <div className={styles.options}>
                    <button onClick={() => openCloseDeleteModal()}>Удалить</button>
                    <button onClick={() => setIsEdit(true)}>Редактировать</button>
                    <button onClick={() => navigate("/")}>Назад</button>
                </div>
            </div>

            <DeleteModal
                onNo={() => setOpenerModal(!openerModal)}
                onYes={onConfirmDelete}
                open={openerModal}
            ></DeleteModal>
        </>
    )
}