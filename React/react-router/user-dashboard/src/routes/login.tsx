import {useActionState, useEffect} from "react";
import type {LoginType} from "../type";
import {useNavigate} from "react-router";
import {getUser} from "../api";

const INITIAL_STATE: LoginType = {
    login: '',
    password: '',
    user: null,
    error: null
};

const delay = async (ms: number) =>
    await new Promise(resolve => setTimeout(resolve, ms));

const users = [
    {login: '123qwe', password: '111'}
];

const loginAction = async (state: LoginType, formData: FormData): Promise<LoginType> => {
    try {
        const password = formData.get('password') as string;
        const login = formData.get('login') as string;

        if (!users.find(user => user.login === login && user.password === password))
            return {...state, error: 'Wrong password or login', user: null};

        await delay(1000);
        const user = await getUser(1);

        localStorage.setItem('isAuthenticated', 'true');
        return {
            login: '',
            password: '',
            user,
            error: null,
        };
    } catch (e) {
        return {...state, error: `error - ${e}`, user: null};
    }
};

export const Login = () => {
    const navigate = useNavigate();
    const [state, formAction, isPending] = useActionState(loginAction, INITIAL_STATE);

    useEffect(() => {
        if (state.user) {
            navigate('/dashboard');
        }
    }, [navigate, state.user]);

    return (
        <>
            <form action={formAction} className="flex flex-col max-w-2xl border-2 p-3 rounded-2xl gap-2">
                <input type="text" name="login" placeholder="vasya_pupkin" className="border rounded-2xl p-2"/>
                <input type="password" name="password" placeholder="" className="border rounded-2xl p-2"/>
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-amber-200 rounded-2xl border cursor-pointer"
                >
                    Войти
                </button>
                {state.error && <p>{state.error}</p>}
            </form>
        </>
    );
};