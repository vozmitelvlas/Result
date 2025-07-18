export const Sort = ({sortValue, onChange}) => (
    <select
        className="form-select w-50"
        aria-label="Default select example"
        value={sortValue}
        onChange={onChange}
    >
        <option value="">Сортировать</option>
        <option value="-1">Новые</option>
        <option value="1">Старые</option>
    </select>
)