import {useState} from 'react'
import styles from './App.module.css'
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const fieldsSchema = yup.object()
    .shape({
        email: yup.string()
            .required('Email обязателен')
            .email('Некорректный формат Email'),
        // .matches(/@/, 'В email отсутствует символ \\"@\\"!'),

        firstPassword: yup.string()
            .required('Пароль обязателен')
            .matches(/[A-Z]/, 'Пароль должен содержать прописные буквы!')
            .min(3, "Пароль слишком короткий!")
            .max(7, "Хорошие пароли не принимаем! :)"),

        secondPassword: yup.string()
            .oneOf([yup.ref('firstPassword'), null], 'Пароли должны совпадать')

    })

function App() {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: "",
            firstPassword: "",
            secondPassword: ""
        },
        resolver: yupResolver(fieldsSchema)
    })
    // const { email, firstPassword, secondPassword } = errors;

    const firstErrorKey = Object.keys(errors)[0];
    const error = firstErrorKey ? errors[firstErrorKey].message : '';

    const sendFormData = (formData) => {
        console.log("formData", formData)
    }
    return (
        <>
            <div className={styles.signInUp}>
                <div className={styles.container}>
                    <p className="text-class">Регистрация</p>

                    <form onSubmit={handleSubmit(sendFormData)}>
                        {error && <span>{error}</span>}
                        <input name="email" type="text" placeholder="Почта" {...register('email')} ></input>

                        <input name="firstPassword" type="password"
                               placeholder="Пароль" {...register('firstPassword')}></input>

                        <input name="secondPassword" type="password"
                               placeholder="Повторите пароль" {...register('secondPassword')}></input>

                        <button type="submit"
                                disabled={!!error}>Зарегистрироваться
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default App