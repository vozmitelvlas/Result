import {useRevalidator, useRouteLoaderData} from "react-router";
import {type SubmitEvent, useState} from "react";
import {updateUserName} from "../api";
import type {User} from "../type";

export const UserSettings = () => {
    const {name, id} = useRouteLoaderData('dashboard') as User;
    const [isSaved, setIsSaved] = useState(false);
    const [newName, setNewName] = useState(name);
    const {revalidate} = useRevalidator();

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updateUserName(id, newName);
            setIsSaved(true);
            await revalidate();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2>UserSettings</h2>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <label className="flex items-center gap-2 ">
                    <p>Set new Name:</p>
                    <input
                        type="text"
                        value={newName}
                        className="border rounded-xl p-2"
                        onFocus={() => setIsSaved(false)}
                        onChange={(event) => setNewName(event.target.value)}
                    />
                </label>
                <button type="submit" className="bg-amber-200 p-2 rounded-xl border cursor-pointer">
                    Save
                </button>
            </form>
            {isSaved && <p>New name is {newName}</p>}
        </div>
    );
};