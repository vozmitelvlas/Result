import type { SubmitEvent } from "react";
import { Input } from "../Input/Input";
import { DogIcon, UserIcon } from "../icons";

interface SignupProps {
    onSubmit: (data: { email: string; password: string; }) => void;
}

export const Signup = ({ onSubmit }: SignupProps) => {
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        onSubmit({ email, password });
    };

    return (
        <form className="flex flex-col items-center border p-2 rounded-md gap-2" onSubmit={handleSubmit} >
            <h1 className="text-3xl font-medium mb-4">Sign up</h1>
            <Input
                name="name"
                label="Имя"
                withAsterisk
                placeholder="Вася"
            />
            <div className="flex gap-4 items-center">
                <label className="flex items-center">Пол:</label>

                <label className="flex items-center gap-1">
                    <input type="radio" name="sex" value="men" />
                    <span>М</span>
                </label>

                <label className="flex items-center gap-1">
                    <input type="radio" name="sex" value="women" />
                    <span>Ж</span>
                </label>
            </div>
            <Input
                name="nickname"
                label="Ник"
                withAsterisk
                placeholder="vasya2003"
                icon={<UserIcon size="18px" color="#99a1af" />}
            />
            <Input
                name="email"
                type="email"
                label="Почта"
                withAsterisk
                placeholder="vasya2003@mail.ru"
                icon={<DogIcon size="18px" color="#99a1af" />}
            />
            <Input
                name="password"
                label="Пароль"
                withAsterisk
                type="password"
            />
            <Input
                name="repeatPsassword"
                label="Повторите пароль"
                withAsterisk
                type="password"
            />

            <button className="w-full border-2 rounded-md active:bg-blue-300 cursor-pointer">Войти</button>
        </form>
    );
};