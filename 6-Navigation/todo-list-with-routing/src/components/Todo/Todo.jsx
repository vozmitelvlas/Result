import styles from "./Todo.module.css"
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import DeleteModal from "../ModalWindows/DeleteModal.jsx";
import {todosAPI} from "../../api/todosAPI.js";

export default function Todo() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [newTitle, setNewTitle] = useState("")
    const [message, setMessage] = useState("")
    const [openerModal, setOpenerModal] = useState(false)
    const openCloseDeleteModal = () => setOpenerModal(!openerModal)

    useEffect(() => {
        todosAPI.getById(id)
            .then(res => {
                setNewTitle(res.title)
            })
    }, [])
    const onChangeTitle = ({target}) => {
        setNewTitle(target.value)
    }
    const onSaveTitle = async () => {
        await todosAPI.update({id, title: newTitle, completed: false})
        setMessage("Изменения сохранены")
    }
    const onDeleteTodo = async () => {
        await todosAPI.deleteById(id)
        navigate("/")
    }

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
                    <button onClick={() => navigate("/")}>Назад</button>
                    <button onClick={openCloseDeleteModal}>Удалить</button>
                    <button onClick={onSaveTitle}>Сохранить</button>
                </div>
            </div>

            <DeleteModal
                onNo={openCloseDeleteModal}
                onYes={onDeleteTodo}
                open={openerModal}/>
        </>
    )
}