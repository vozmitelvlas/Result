import styles from "../Todo.module.css";
import {useContext} from "react";
import App from "../../../App.jsx";
import {AppContext} from "../../../context.jsx";

export default function TitlePart({isEdit, onSaveClick, setTitle, isDone, title, toDoId}){
    const {onDone} = useContext(AppContext)

    return(
        <>
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
        </>
    )
}