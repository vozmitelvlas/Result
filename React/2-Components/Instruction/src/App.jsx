import {useState} from 'react'
import styles from './App.module.css'
import data from "./data.json";

function App() {
    let [steps, setSteps] = useState(data)
    let [activeIndex, setActiveIndex] = useState(0)
    let isFirstStep = activeIndex === 0
    let isLastStep = steps.length === activeIndex + 1

    let onForwardClick = () => {
        let tmpIndex = ++activeIndex
        setActiveIndex(tmpIndex)
    }
    let onBackClick = () => {
        setActiveIndex(--activeIndex)
    }
    let onStartAgainClick = () => {
        setActiveIndex(0)
    }
    let onStepClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>Инструкция по готовке пельменей</h1>
                    <div className={styles.steps}>
                        <div className={styles['steps-content']}>
                            {steps[activeIndex].content}
                        </div>
                        <ul className={styles['steps-list']}>

                            {steps.map((step, i) => (
                                <li key={step.id}
                                    className={`${styles['steps-item']} ${activeIndex >= i ? styles.done : ''} ${activeIndex === i ? styles.active : ''}`}>
                                    <button className={styles['steps-item-button']}
                                            onClick={() => onStepClick(i)}>{i + 1}</button>
                                    {step.title}
                                </li>
                            ))}
                        </ul>
                        <div className={styles['buttons-container']}>
                            <button className={styles.button} onClick={onBackClick} disabled={isFirstStep}>Назад
                            </button>
                            <button className={styles.button} onClick={isLastStep ? onStartAgainClick : onForwardClick}>
                                {isLastStep ? "Начать сначала" : "Далее"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
