import React, {useContext} from "react";
import styles from "./SliderButton.module.css";
import {AppContext} from "../../context.jsx";

export default function SliderButton () {
    const {sort, openerSlider} = useContext(AppContext)

    const toggleMode = () => {
        sort(!openerSlider)
    }
    return (
        <div>
            <div onClick={toggleMode} className={`${styles.slider} ${openerSlider ? styles.sliderOn : styles.sliderOff}`}>
                <div className={`${styles.circle} ${openerSlider ? styles.circleOn : styles.circleOff}`}/>
            </div>
        </div>
    )
}