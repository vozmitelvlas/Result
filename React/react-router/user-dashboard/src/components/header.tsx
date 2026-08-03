import {useLocation, useNavigate} from "react-router";
import {useAuth} from "../hooks";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {isAuth, logout} = useAuth();
    const isLoginPage = location.pathname === '/login';

    return (
        <div>
            <h1>Это главная страница, привет!</h1>
            {!isLoginPage && (
                isAuth ? (
                    <button
                        className="bg-amber-200 p-2 rounded-xl border cursor-pointer"
                        onClick={() => logout(() => navigate('/login'))}
                    >
                        Выйти
                    </button>
                ) : (
                    <button
                        className="bg-amber-200 p-2 rounded-xl border cursor-pointer"
                        onClick={() => navigate('/login')}
                    >
                        Войти
                    </button>
                )
            )}
        </div>
    );
};

export default Header;