import {useRouteLoaderData} from "react-router";
import type {User} from "../type";

export const UserProfile = () => {
    const {name, email} = useRouteLoaderData('dashboard') as User;
    return (
        <div>
            <h2>UserProfile</h2>
            <div className="flex flex-col justify-center gap-2">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};