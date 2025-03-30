import SearchBlock from "./SearchBlock/SearchBlock.jsx";
import NewTask from "./NewTask/NewTask.jsx";
import styles from "../App.module.css";
import SliderButton from "./Slider/SliderButton.jsx";

export const Header = ({onAddNewTodo}) => {
    return (
        <>
            <SearchBlock/>
            <NewTask onAddNewTodo={onAddNewTodo}/>
            <div className={styles.sort}>
                <h3>Сортировать</h3>
                <SliderButton/>
            </div>
        </>
    )
}