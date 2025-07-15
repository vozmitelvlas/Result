import * as yup from "yup";

export const loginSchema = yup.object()
    .shape({
        email: yup.string()
            .email('Некорректный формат почты.')
            .required('Не указана элетронная почта.'),

        password: yup.string()
            .min(3, 'Неверный пароль. Должно быть не меньше 3 символов.')
            .matches(/[\d]+/ui, 'Неверный пароль. Пароль должен содержать хотя бы одну цифру.')
            .matches(/[a-zA-Z]/i, 'Неверный пароль. Пароль должен состоять из латинских букв и цифр.')
    })

export const requestSchema = yup.object()
    .shape({
        user: yup.string()
            .required('Не указано ФИО.')
            .matches(/^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+(\s[А-ЯЁ][а-яё]+)?$/, 'Введите корректно ФИО.'),

        number: yup.string()
            .required('Не указан номер телефона.')
            .matches(/^(?:\+7|8)\d{10}$/, 'Неверно набран номер телефона. Шаблон: 8(+7) XXX XXX XX XX'),

        description: yup.string().required('Опишите проблему и жалобы.')
    })