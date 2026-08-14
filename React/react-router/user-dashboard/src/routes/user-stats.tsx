import {useLoaderData} from "react-router";

const renderValue = (key: string, value: object | string) => {
    if (typeof value === 'object' && value !== null) {
        return <div key={key}>
            {Object.entries(value).map(([key, value]) => renderValue(key, value))}
        </div>;
    }
    return <p key={key}>
        <strong>{key}:</strong> {value}
    </p>;
};

export const UserStats = () => {
    const user = useLoaderData<Record<string, object | string>>();
    return (
        <div>
            <h2>UserStats</h2>
            {Object.entries(user).map(([key, value]) => renderValue(key, value))}
        </div>
    );
};