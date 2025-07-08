import React from "react";
import styles from "./SliderButton.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeSortingAction} from "../../../actions/options";
import {selectIsSort} from "../../../selectors/options-selectors.js";

export default function SliderButton () {
    const dispatch = useDispatch()
    const isSort = useSelector(selectIsSort)

    const toggleMode = () => dispatch(changeSortingAction(!isSort))

    return (
        <div onClick={toggleMode} className={`${styles.slider} ${isSort ? styles.sliderOn : styles.sliderOff}`}>
            <div className={`${styles.circle} ${isSort ? styles.circleOn : styles.circleOff}`}/>
        </div>
    )
}