import {isRouteErrorResponse, useRouteError} from "react-router";

export const ContentErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>{error.status} {error.statusText}</h1>

                <p>{typeof error.data === "string" ? error.data : error.data?.error ?? "Неизвестная ошибка"}</p>
            </div>
        );
    }

    if (error instanceof Error) {
        return (
            <div>
                <h1>Что-то пошло не так</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return <h1>Неизвестная ошибка</h1>;
};