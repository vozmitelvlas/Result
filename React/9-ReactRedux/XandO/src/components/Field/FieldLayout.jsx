import styles from "./fieldLayout.module.css"
import {useSelector} from "react-redux";

export const FieldLayout = ({onFieldClick, onRestartClick}) => {
    const field = useSelector(state => state.field)
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