import styles from "../Todos.module.css";
import SearchBlock from "../../SearchBlock/SearchBlock.jsx";
import NewTask from "../../NewTask/NewTask.jsx";
import SliderButton from "../../Slider/SliderButton.jsx";

export const Header = ({ onSearch, setNewTodo, newTodo, onAddNewTodo, sortTodos, openerSlider}) => {
    return (
        <>
            <div className={styles.header}>
                <SearchBlock
                    onSearch={event => onSearch(event)}
                ></SearchBlock>
                <NewTask
                    setNewTodo={setNewTodo}
                    newTodo={newTodo}
                    onAddNewTodo={onAddNewTodo}
                ></NewTask>
                <div className={styles.sort}>
                    <h3>Сортировать</h3>
                    <SliderButton
                        sort={sortTodos}
                        openerSlider={openerSlider}
                    ></SliderButton>
                </div>
            </div>
        </>
    )
}