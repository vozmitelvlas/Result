import {useLoaderData} from "react-router";

export const Dashboard = () => {
    const {name} = useLoaderData();

    return (
        <div>
            <h1>It is DashBoard</h1>
            <h2>User name is {name}</h2>
        </div>
    );
};