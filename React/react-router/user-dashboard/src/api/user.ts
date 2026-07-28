export const getUser = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok)
        throw new Error('Error of user download');
    return await res.json();
};