import {useState} from 'react'
import styles from './App.module.css'
import {useStore} from "./store.jsx";


function App() {
    const {getFormValues, updateFormValues} = useStore()
    const {email, firstPassword, secondPassword} = getFormValues()
    const [error, setError] = useState(null)

    const onChange = ({target}) => {
        updateFormValues(target.name, target.value)
        setError(null)

        if (firstPassword.length > 7) {
            setError("Хорошие пароли не принимаем!")
        }
    }
    const onBlur = () => {
        if (!/@/.test(email)) {
            setError("В email отсутствует символ \"@\"!")
        }
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if(isValid()) console.log(getFormValues())
    }
    const isValid = () => {
        if (firstPassword !== secondPassword) {
            setError("Пароли не совпадают")
            return false
        } else if (firstPassword.length < 3) {
            console.log("asd")
            setError("Пароль слишком короткий!")
            return false
        } else if (!/[A-Z]/.test(firstPassword)) {
            setError("Пароль должен содержать прописные буквы!")
            return false
        }
        return true
    }

    return (
        <>
            <div className={styles.signInUp}>
                <div className={styles.container}>
                    <p className="text-class">Регистрация</p>
                    {error && <span>{error}</span>}
                    <form onSubmit={onSubmit}>
                        <input value={email} name="email" onChange={onChange} onBlur={onBlur} type="text"
                               placeholder="Почта"></input>
                        <input value={firstPassword} name="firstPassword" onChange={onChange} type="password"
                               placeholder="Пароль"></input>
                        <input value={secondPassword} name="secondPassword" onChange={onChange}
                               type="password"
                               placeholder="Повторите пароль"></input>
                        <button type="submit" className={styles.button} disabled={error !== null}>Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default App
