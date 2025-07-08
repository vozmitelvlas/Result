import styles from "../Todos.module.css";
import SearchBlock from "../../components/SearchBlock/SearchBlock.jsx";
import {NewTask} from "../../components/NewTask/NewTask.jsx";
import SliderButton from "../../components/Slider/SliderButton.jsx";

export const Header = ({onSearch, onAdd}) => {
    return (
        <div className={styles.header}>
            <SearchBlock onSearch={onSearch}/>
            <div className={styles.sort}>
                <NewTask onAdd={onAdd}/>
                <h3>Сортировать</h3>
                <SliderButton/>
            </div>
        </div>
    )
}