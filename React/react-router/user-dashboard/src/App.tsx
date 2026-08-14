import {Outlet, useLocation, useNavigate} from 'react-router';
import './App.css';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isMainPage = location.pathname === '/';

    const onLogout = () => {
        localStorage.setItem('isAuthenticated', 'false');
        navigate('/');
    };

    return (
        <div className="flex items-center flex-col">
            <h1>Это главная страница, привет!</h1>
            {(isMainPage) &&
                (<button className="bg-amber-200 p-2 rounded-xl border cursor-pointer"
                         onClick={() => navigate('/login')}
                    >
                        Войти
                    </button>
                )}
            {!isLoginPage && !isMainPage && (
                <button className="bg-amber-200 p-2 rounded-xl border cursor-pointer"
                        onClick={onLogout}
                >
                    Выйти
                </button>
            )}
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
