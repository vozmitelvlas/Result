export const Search = ({onChange, searchPhrase}) => (
    <div role="search" className="input-group flex-nowrap">
        <input className="form-control me-2" type="search" onChange={onChange} value={searchPhrase}
               placeholder="Поиск.."
               aria-label="Search"
        />
    </div>
)