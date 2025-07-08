import deleteLogo from "../../assets/delete.svg"
import editLogo from "../../assets/edit.svg"
import styles from "./Todo.module.css"
import {useState} from "react";

export default function Todo({children, onDelete, isDone, onDone, toDoId, onUpdate}) {
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(children)
    const onSaveClick = (event) => {
        onUpdate(event, toDoId, title)
        setIsEdit(!isEdit)
    }

    return (
        <>
            <div className={isDone ? styles.doneTodo : styles.todo}>
                {isEdit ? (
                    <form onSubmit={onSaveClick} className={styles.form}>
                        <input type="text" value={title} onChange={({target}) => setTitle(target.value)}/>
                        <button type="submit" className={styles.saveBut}>
                            Сохранить
                        </button>
                    </form>
                ) : (
                    <div className={styles.text}>
                        <input
                            type="checkbox"
                            checked={isDone}
                            onChange={({target}) => onDone(target.checked, toDoId)}/>
                        <p>{title}</p>
                    </div>
                )}
                <div className={styles.options}>
                    <a className="a-img" data-style="edit" onClick={() => setIsEdit(!isEdit)}>
                        <img data-style="edit" src={editLogo}></img>
                    </a>
                    <a className="a-img" onClick={() => onDelete(toDoId)}>
                        <img src={deleteLogo}></img>
                    </a>
                </div>
            </div>
        </>
    )
}