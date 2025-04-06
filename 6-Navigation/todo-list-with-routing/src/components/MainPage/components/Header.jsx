import styles from "../Todos.module.css";
import SearchBlock from "../../SearchBlock/SearchBlock.jsx";
import NewTask from "../../NewTask/NewTask.jsx";
import SliderButton from "../../Slider/SliderButton.jsx";

export const Header = ({onSearch, setIsSort, openerSlider, onAdd, setNewTodo, newTodo}) => {
    return (
        <div className={styles.header}>
            <SearchBlock onSearch={onSearch}/>

            <div className={styles.sort}>
                <NewTask setNewTodo={setNewTodo} newTodo={newTodo} onAdd={onAdd}/>
                <h3>Сортировать</h3>
                <SliderButton setIsSort={setIsSort} openerSlider={openerSlider}/>
            </div>
        </div>
    )
}