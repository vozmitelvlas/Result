import styles from "./NewTask.module.css"

export default function NewTask({onAdd}) {
    return (
        <>
            <button type="submit" onClick={onAdd}>➕</button>
        </>
    )
}