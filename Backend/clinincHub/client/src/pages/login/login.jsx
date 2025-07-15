import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginSchema} from "../../schemas.js";
import {apiClient} from "../../utils";


export const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [authState, setAuthState] = useState({
        email: "",
        password: "",
    })

    const onChange = ({target}) => {
        setAuthState({
            ...authState,
            [target.name]: target.value,
        })
    }
    const onSendForm = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const checkedAuthState = await loginSchema.validate(authState)
            await apiClient('/login', 'POST', checkedAuthState)

            navigate("/table")
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    const onFocus = () => setError("")

    return (
        <div className="container h-100 w-50">
            <div className="row h-100 align-items-center mt-5">
                <form onSubmit={onSendForm} onFocus={onFocus} className="card card-body p-md-5 text-black" noValidate>
                    <h3 className="mb-5 text-uppercase">Вход в clinicHub</h3>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">Электронная почта *</label>
                        <input type="email" name="email" id="email" placeholder="ivanov_ivan@mail.ru"
                               className="form-control form-control-lg" onChange={onChange} value={authState.email}/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Пароль *</label>
                        <input type="password" name="password" id="password"
                               className="form-control form-control-lg" onChange={onChange} value={authState.password}/>
                    </div>
                    {error && <div className="alert alert-primary" role="alert">
                        {error}
                    </div>}
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn btn-outline-primary ms-2" disabled={isLoading}>
                            {isLoading ? "Вход..." : "Войти"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}