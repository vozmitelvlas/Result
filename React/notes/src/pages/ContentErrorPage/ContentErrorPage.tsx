import {Button, Center, Stack, Text, Title} from '@mantine/core';
import {isRouteErrorResponse, useRouteError} from 'react-router';

export const ContentErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <Center h="100dvh">
                <Stack align="center">
                    <Title order={1}>{error.status}</Title>

                    <Text>{error.statusText}</Text>

                    {typeof error.data === 'string' && (
                        <Text>{error.data}</Text>
                    )}

                    <Button onClick={() => window.location.reload()}>Обновить страницу</Button>
                </Stack>
            </Center>
        );
    }

    if (error instanceof Error) {
        return (
            <Center h="100dvh">
                <Stack align="center">
                    <Title order={2}>Что-то пошло не так</Title>

                    <Text>
                        Произошла непредвиденная ошибка.
                        Попробуйте обновить страницу.
                    </Text>

                    <Button onClick={() => window.location.reload()}>Обновить страницу</Button>
                </Stack>
            </Center>
        );
    }

    return (
        <Center h="100dvh">
            <Stack align="center">
                <Title order={2}>Неизвестная ошибка</Title>

                <Button onClick={() => window.location.reload()}>Обновить страницу</Button>
            </Stack>
        </Center>
    );
};