import type { SubmitEvent } from "react";
import { Input } from "../Input/Input";
import { DogIcon } from "../icons";

interface SigninProps {
    onSubmit: (data: { email: string; password: string; }) => void;
}

export const Signin = ({ onSubmit }: SigninProps) => {
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        onSubmit({ email, password });
    };

    return (
        <form className="flex flex-col items-center border p-2 rounded-md gap-2" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-medium mb-4">Sign in</h1>
            <Input
                name="email"
                label="Почта"
                id="user-email"
                description="Введите свою почту"
                placeholder="ivanov@mail.ru"
                withAsterisk
                icon={<DogIcon size="18px" color="#99a1af" />}
            />
            <Input
                name="password"
                label="Пароль"
                id="user-password"
                withAsterisk
                type="password"
            />
            <button className="w-full border-2 rounded-md active:bg-blue-300 cursor-pointer">Войти</button>
        </form>
    );
};