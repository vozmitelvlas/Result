import {NavLink, Outlet, ScrollRestoration, useNavigation} from "react-router";
import type {StyledProps} from "./types";
import styled from "styled-components";
import {Suspense} from "react";
import './App.css';

function AppContainer({className}: StyledProps) {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className={className}>
            <header className="header">
                <h1>Привет, мой дорогой друг!</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/heroes">Герои</NavLink>
                        </li>
                        <li>
                            <NavLink to="locations">Локации</NavLink>
                        </li>
                        <li>
                            <NavLink to="episodes">Эпизоды</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                {isLoading && (
                    <h2>🌀 Загрузка данных...</h2>
                )}
                <Suspense fallback={<h2>🌀 Загрузка страницы...</h2>}>
                    <Outlet/>
                </Suspense>
            </main>
            <ScrollRestoration/>
        </div>
    );
};

export const App = styled(AppContainer)`
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
`;