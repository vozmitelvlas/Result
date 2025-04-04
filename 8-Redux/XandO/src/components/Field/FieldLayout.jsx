import styles from "./fieldLayout.module.css"
import {store} from "../../store.js";

export const FieldLayout = ({onFieldClick, onRestartClick}) => {
    const {field} = store.getState()
    return(
        <>
            <div className={styles.field}>
                {field.map((cell, ind) => (
                    <button key={ind} data-index={ind} onClick={onFieldClick}>{cell}</button>
                ))}
            </div>
            <button className="restart" onClick={onRestartClick}>Начать заново</button>
        </>
    )
}