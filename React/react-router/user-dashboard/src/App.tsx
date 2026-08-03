import {Outlet} from 'react-router';
import './App.css';
import {AuthProvider} from "./components";
import Header from "./components/header.tsx";

function App() {
    return (
        <AuthProvider>
            <div className="flex items-center flex-col">
                <Header/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </AuthProvider>
    );
}

export default App;
