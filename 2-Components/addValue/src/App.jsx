import { useState } from 'react'
import styles from "./App.module.css"
import {getDateFormat, getTimeFormat} from "./utils/DateAndTime.jsx";

function App() {
    let [value, setValue] = useState("")
    let [list, setList] = useState([])
    let [error, setError] = useState("")
    const isValueValid = value.length >= 3

    let onInputButtonClick = () => {
        let promptValue = prompt().trim()
        if (promptValue.length < 3) {
            setError("Введенное значение должно содержать минимум 3 символа")
        } else {
            setValue(promptValue)
            setError("")
        }
    }
    let onAddButtonClick = () => {
        let id = Date.now()
        let time = getDateFormat(new Date(), '.') + " " + getTimeFormat(new Date(), ':')
        setList([...list, {id, value, time}])
        setValue("")
    }


    return (
        <>
            <div className={styles.app}>
                <h1 className={styles["page-heading"]}>Ввод значения</h1>
                <p className={styles["no-margin-text"]}>
                    Текущее значение <code>value</code>: "
                    <output className={styles["current-value"]}>{value}</output>
                    "
                </p>
                <div className={styles["error"]}>{error}</div>
                <div className={styles["buttons-container"]}>
                    <button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
                    <button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>Добавить в список</button>
                </div>
                <div className={styles["list-container"]}>
                    <h2 className={styles["list-heading"]}>Список:</h2>

                    {!list.length ? (
                        <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
                    ) : (
                        <ul className={styles.list}>
                            {list.map(({id, value, time}) => (
                                <li key={id}>{value} ({time})</li>
                            ))}
                        </ul>
                    )}

                </div>
            </div>
        </>
    )
}

export default App
