import {useNavigate} from "react-router-dom"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-light bg-light navbar-expand">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" role="button" onClick={() => navigate('/')}>Создать заявку</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" role="button" onClick={() => navigate('/login')}>Войти</a>
                </li>
            </ul>
        </nav>)
}