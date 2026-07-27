import {Link, useRouteError, isRouteErrorResponse} from 'react-router';

export const NotFoundPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div className="not-found">
                <h1>{error.status}</h1>
                <h2>
                    {error.status === 404
                        ? 'Страница не найдена'
                        : 'Что-то пошло не так'}
                </h2>
                <p>{error.statusText || error.data}</p>
                <Link to="/">← На главную</Link>
            </div>
        );
    }

    const message =
        error instanceof Error
            ? error.message
            : 'Неизвестная ошибка';

    return (
        <div className="not-found">
            <h1>500</h1>
            <h2>Внутренняя ошибка сервера</h2>
            <p>{message}</p>

            {import.meta.env.DEV && error instanceof Error && (
                <pre style={{color: 'red', fontSize: '12px'}}>
                    {error.stack}
                </pre>
            )}
            <Link to="/">← На главную</Link>
        </div>
    );
};