import {useEffect, useMemo, useState} from "react";
import {Pagination, Sort, Search} from "./components";
import {formatDate, debounce, apiClient} from "../../utils";

export const Table = () => {
    const [page, setPage] = useState(1)
    const [error, setError] = useState("")
    const [lastPage, setLastPage] = useState(1)
    const [requests, setRequests] = useState([])
    const [sortValue, setSortValue] = useState("1")
    const [isLoading, setIsLoading] = useState(false)
    const [searchPhrase, setSearchPhrase] = useState("")
    const [shouldSearch, setShouldSearch] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        apiClient(`/table?page=${page}&phrase=${encodeURIComponent(searchPhrase)}&sortOrder=${sortValue}`)
            .then(requests => {
                setLastPage(requests.totalPages)
                setRequests(requests.res)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [page, shouldSearch, sortValue])

    const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), [])
    const startDelayedSetPage = useMemo(() => debounce(setPage, 1000), [])
    const onSearch = async ({target}) => {
        setSearchPhrase(target.value)
        startDelayedSearch(!shouldSearch)
        startDelayedSetPage(1)
    }

    const onSort = ({target}) => {
        if (target.value) {
            setPage(1)
            setSortValue(target.value)
        }
    }

    const onSearchFocus = () => setPage(1)

    if (error)
        return <div className="alert alert-danger">
            {error}
        </div>

    return (
        <div className="container mt-4 w-100 d-flex flex-column align-items-center">
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                </div>
            ) : (
                <div className="container mt-4 w-100 d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center justify-content-center mb-3 gap-5 w-50">
                        <Sort onChange={onSort} sortValue={sortValue}/>
                        <Search onChange={onSearch} searchPhrase={searchPhrase} onFocus={onSearchFocus}/>
                    </div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Дата отправки</th>
                            <th scope="col">ФИО</th>
                            <th scope="col">Телефон</th>
                            <th scope="col">Проблема</th>
                        </tr>
                        </thead>
                        <tbody>
                        {requests.map(({date, user, number, description, _id}) => (
                            <tr key={_id}>
                                <td>{formatDate(date)}</td>
                                <td>{user}</td>
                                <td>{number}</td>
                                <td>{description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
            <Pagination setPage={setPage} page={page} lastPage={lastPage}/>
        </div>
    )
}