import {NavLink, Outlet, useLoaderData} from "react-router";

export const Dashboard = () => {
    const {name} = useLoaderData();

    return (
        <div>
            <header>
                <h1>Привет, {name}</h1>
                <nav className="flex gap-2 justify-center m-6">
                    <NavLink to="profile" className="bg-amber-200 p-2 rounded-xl border">Профиль</NavLink>
                    <NavLink to="settings" className="bg-amber-200 p-2 rounded-xl border">Настройки</NavLink>
                    <NavLink to="stats" className="bg-amber-200 p-2 rounded-xl border">Все данные</NavLink>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    );
};

