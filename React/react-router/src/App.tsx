import {NavLink, Outlet, ScrollRestoration, useNavigation} from "react-router";
import type {StyledProps} from "./types";
import styled from "styled-components";
import './App.css';
import * as React from "react";

const ExtendedLink = ({to, children}: { to: string, children: React.ReactNode }) =>
    (<NavLink to={to}>
        {children}
    </NavLink>);

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
                            <ExtendedLink to="/heroes">Heroes</ExtendedLink>
                        </li>
                        <li>
                            <ExtendedLink to="locations">Location</ExtendedLink>
                        </li>
                        <li>
                            <ExtendedLink to="episodes">Episodes</ExtendedLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                {isLoading ? (
                    <h2>🌀 Загрузка данных...</h2>
                ) : <Outlet/>}

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

  a {
    font-size: 24px;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .active {
    color: green;
  }

  .pending {
    color: red;
  }
` as React.ComponentType<any>;