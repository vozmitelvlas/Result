import styles from "./SearchBlock.module.css";
import {useContext} from "react";
import {AppContext} from "../../context.jsx";

export default function SearchBlock(){
    const {onSearch} = useContext(AppContext)
    return(
        <>
            <div className={styles.search}>
                <h1>Todo list</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Поиск"
                        onChange={onSearch}/>
                </div>
            </div>
        </>
    )
}