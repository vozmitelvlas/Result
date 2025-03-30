import React from "react";
import styles from "./SliderButton.module.css";

export default function SliderButton ({openerSlider, sort}) {
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