import {Outlet} from 'react-router';
import './App.css';

function App() {

    return (
        <div className="flex items-center flex-col">
            <h1>Это главная страница, привет!</h1>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
