import {useState} from "react";
import {requestSchema} from "../../schemas.js";
import {apiClient} from "../../utils";

const initialRequestState = {
    user: "",
    number: "+7",
    description: "",
}
export const Request = () => {
    const [request, setRequest] = useState(initialRequestState)
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")

    const onSendForm = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const validateRequestState = await requestSchema.validate(request)
            await apiClient('/', 'POST', {
                ...validateRequestState,
            })

            setMessage('Запись отправлена, ожидайте звонка.')
            setRequest(initialRequestState)
        } catch (error) {
            setMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    const onFocus = () => setMessage("")

    const onChange = ({target}) => setRequest({...request, [target.name]: target.value,})

    return (
        <div className="container h-100 w-50">
            <div className="row h-100 align-items-center mt-5">
                <form onSubmit={onSendForm} onFocus={onFocus} className="card card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">запись к врачу</h3>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="user">ФИО</label>
                        <input type="text" name="user" id="user" required
                               placeholder="Иванов Иван Иванович"
                               className="form-control form-control-lg" onChange={onChange} value={request.user}/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="number">Номер телефона</label>
                        <input type="text" name="number" id="number"
                               className="form-control form-control-lg" onChange={onChange} value={request.number}/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="description">Опишите жалобы</label>
                        <textarea name="description" id="description" className="form-control form-control-lg"
                                  rows="4" onChange={onChange} value={request.description}></textarea>
                    </div>
                    {message && <div className="alert alert-primary" role="alert">
                        {message}
                    </div>}
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn btn-outline-primary ms-2" disabled={isLoading}>
                            {isLoading ? "Отправка..." : "Отправить заявку"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}