import {Button, Center, Paper, PasswordInput, Stack, TextInput, Title} from "@mantine/core";
import {useNavigate} from "react-router";
import {useForm} from '@mantine/form';
import {useAuth} from "@/hooks";

interface LoginFormValues {
    email: string,
    password: string
}

export const LoginPage = () => {
    const navigate = useNavigate();
    const {login} = useAuth();
    const {onSubmit, getInputProps, setFieldError} = useForm<LoginFormValues>({
        mode: "controlled",
        initialValues: {email: '', password: ''}
    });

    const handleSubmit = async ({email, password}: LoginFormValues) => {
        try {
            await login(email, password);
            navigate('/notes', {replace: true});
        } catch {
            setFieldError('password', 'Неверное имя пользователя или пароль');
        }
    };

    return (
        <Center mih="100dvh">
            <Paper withBorder shadow="md" p="xl" w="100%" maw={400}>
                <form onSubmit={onSubmit(handleSubmit)}>
                    <Title mb="xs">Вход</Title>
                    <Stack>
                        <TextInput
                            required
                            label="Почта"
                            variant="filled"
                            {...getInputProps('email')}
                            type="email"
                            autoComplete="email"
                        />
                        <PasswordInput
                            required
                            label="Пароль"
                            variant="filled"
                            {...getInputProps('password')}
                        />
                        <Button type="submit">Войти</Button>
                    </Stack>
                </form>
            </Paper>
        </Center>
    );
};