import type {User} from "../type";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUser = async (id: number): Promise<User> => {
    const res = await fetch(`${BASE_URL}/users/${id}`);
    if (!res.ok)
        throw new Error('Error of user download');
    return await res.json();
};

export const updateUserName = async (id: number, name: string): Promise<User> => {
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