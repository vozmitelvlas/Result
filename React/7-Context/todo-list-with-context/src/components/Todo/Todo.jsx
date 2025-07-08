import styles from "./Todo.module.css"
import {useContext, useState} from "react";
import TitlePart from "./components/TitlePart.jsx";
import OptionsPart from "./components/OptionsPart.jsx";
import {AppContext} from "../../context.jsx";

export default function Todo({children, isDone, toDoId}) {
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(children)

    const {onUpdate} = useContext(AppContext)
    const onSaveClick = (event) => {
        event.preventDefault()
        onUpdate(event, toDoId, title)
        setIsEdit(!isEdit)
    }

    return (
        <>
            <div className={isDone ? styles.doneTodo : styles.todo}>
                <TitlePart
                    title={title}
                    isEdit={isEdit}
                    setTitle={setTitle}
                    isDone={isDone}
                    onSaveClick={onSaveClick}
                    toDoId={toDoId}/>
                <OptionsPart
                    setIsEdit={setIsEdit}
                    isEdit={isEdit}
                    toDoId={toDoId}/>
            </div>
        </>
    )
}