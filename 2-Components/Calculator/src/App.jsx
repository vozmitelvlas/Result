import { useState } from 'react'
import styles from'./App.module.css'


let numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]
let operators = ["AC", "+", "-", "=",]

function App() {
    let [operand1, setOperand1] = useState("")
    let [operand2, setOperand2] = useState("")
    let [operator, setOperator] = useState("")
    let [result, setResult] = useState("")

    let isSecondOperand = operator !== ""

    let onNumClick = (event, num) => {
        if (result) setResult("")
        if (isSecondOperand) setOperand2(operand2 + num)
        else setOperand1(operand1 + num)
    }

    let onOperatorClick = (operation) => {
        switch (operation) {
            case "+":
            case "-":
                if (result) {
                    setOperand1(result)
                    setOperator(operation)
                    setResult("")
                } else {
                    setOperator(operation)
                }
                break
            case "=":
                if (result) {
                    setResult("")
                    break;
                }
                setOperand1("")
                setOperator("")
                setOperand2("")
                let res = operator === "+" ? Number(operand1) + Number(operand2) : Number(operand1) - Number(operand2)
                setResult(res.toString())
                break
            case "AC":
                setOperator("")
                setOperand1("")
                setOperand2("")
                setResult("")
        }
    }

    return (
        <>
            <div className={styles.app}>
                <div className={`${styles.output} ${result !== "" ? styles.result : ""}`}>
                    {result !== "" ? result : operand1 + operator + operand2}
                </div>

                <div className={styles.keyboard}>
                    <div className={styles.buttons}>
                        {numbers.map((num) => (
                            <button className={styles.button} key={num}
                                    onClick={(e) => onNumClick(e, num)}>{num}</button>
                        ))}
                    </div>

                    <div className={styles.operators}>
                        {operators.map((op) => (
                            <button key={op} className={styles.operator}
                                    onClick={() => onOperatorClick(op)}>{op}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
