import type {User} from "../type";
import {delay} from "../utils";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUserById = async (id: number): Promise<User> => {
    // await delay(1000);
    const res = await fetch(`${BASE_URL}/users/${id}`);
    if (!res.ok)
        throw new Error('Error of user download');
    return await res.json();
};

export const updateUserName = async (id: number, name: string): Promise<User> => {
    await delay(1000);
    const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name}),
    });
    if (!res.ok) {
        throw new Error('Failed to update user name');
    }

    return await res.json();
};

export const getUser = async (payload: { email: string, password: string }): Promise<User> => {
    await delay(1000);
    const res = await fetch(`${BASE_URL}/users?email=${payload.email}`);
    if (!res.ok)
        throw new Error('Error of user download');

    const users = await res.json();
    return users[0];
};