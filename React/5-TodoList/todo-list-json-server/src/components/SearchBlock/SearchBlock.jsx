import styles from "./SearchBlock.module.css";

export default function SearchBlock({onSearch}){
    return(
        <>
            <div className={styles.search}>
                <h1>Todo list</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Поиск"
                        onChange={(event) => onSearch(event)}/>
                </div>
            </div>
        </>
    )
}