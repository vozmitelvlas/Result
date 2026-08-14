import {useActionState, useLayoutEffect} from "react";
import {INITIAL_LOGIN_STATE} from "../constants";
import {useNavigate} from "react-router";
import type {LoginType} from "../type";
import {Input} from "../components";
import {useAuth} from "../hooks";
import {getUser} from "../api";


const loginAction = async (state: LoginType, formData: FormData): Promise<LoginType> => {
    try {
        const password = formData.get('password') as string;
        const email = formData.get('email') as string;
        const user = await getUser({email, password});

        return {
            email: '',
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
    const {login} = useAuth();
    const [state, formAction, isPending] = useActionState(loginAction, INITIAL_LOGIN_STATE);

    useLayoutEffect(() => {
        if (state.user) {
            login(() => {
                navigate('/dashboard', {replace: true});
            });
        }
    }, [login, navigate, state.user]);

    if (isPending || state.user)
        return <div className="loader"></div>;

    return (
        <form action={formAction} className="flex flex-col max-w-2xl border-2 p-3 rounded-2xl gap-2">
            <Input
                type="text"
                name="email"
                placeholder="Sincere@april.biz"
                className="border rounded-2xl p-2"
                label="Email"
                withAsterisk
            />
            <Input
                type="password"
                name="password"
                placeholder="111"
                className="border rounded-2xl p-2"
                label="Password"
                withAsterisk
            />
            <button
                type="submit"
                disabled={isPending}
                className="bg-amber-200 rounded-2xl border cursor-pointer"
            >
                Войти
            </button>
            {state.error && <p>{state.error}</p>}
        </form>
    );
};