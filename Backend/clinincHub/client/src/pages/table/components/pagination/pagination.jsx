export const Pagination = ({setPage, page, lastPage}) => (
    <nav aria-label="..." className="d-flex justify-content-center position-absolute w-100 sticky-bottom">
        <ul className="pagination pagination-lg">
            <li className="page-item">
                <a href="#" className={`page-link ${page === 1 ? 'disabled' : ''}`} onClick={() => setPage(1)}>
                    В начало
                </a>
            </li>
            <li className="page-item">
                <a href="#" className={`page-link ${page === 1 ? 'disabled' : ''}`}
                   onClick={() => setPage(page - 1)}>
                    Предыдущая
                </a>
            </li>
            <li className="page-item">
                <a className="page-link fw-bold">
                    Страница: {page}
                </a>
            </li>
            <li className="page-item">
                <a className={`page-link fw=bold ${page === lastPage ? 'disabled' : ''}`} href="#"
                   onClick={() => setPage(page + 1)}>
                    Следующая
                </a>
            </li>
            <li className="page-item">
                <a className={`page-link fw=bold ${page === lastPage ? 'disabled' : ''}`} href="#"
                   onClick={() => setPage(lastPage)}>
                    В конец
                </a>
            </li>
        </ul>
    </nav>
)