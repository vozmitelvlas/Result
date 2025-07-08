import styles from "./fieldLayout.module.css"

export const FieldLayout = ({field, onFieldClick, onRestartClick}) => {
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