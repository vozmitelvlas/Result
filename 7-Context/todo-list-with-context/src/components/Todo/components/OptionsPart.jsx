import styles from "../Todo.module.css";
import editLogo from "../../../assets/edit.svg";
import deleteLogo from "../../../assets/delete.svg";
import {useContext} from "react";
import {AppContext} from "../../../context.jsx";

export default function OptionsPart({setIsEdit, isEdit, toDoId}) {
    const {onDelete} = useContext(AppContext)

    return(
        <>
            <div className={styles.options}>
                <a className="a-img" data-style="edit" onClick={() => setIsEdit(!isEdit)}>
                    <img data-style="edit" src={editLogo}></img>
                </a>
                <a className="a-img" onClick={() => onDelete(toDoId)}>
                    <img src={deleteLogo}></img>
                </a>
            </div>
        </>
    )
}