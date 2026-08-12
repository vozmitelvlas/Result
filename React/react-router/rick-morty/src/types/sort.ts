export interface SortOption {
    label: string,
    value: 'date' | 'name',
}

export interface SortType {
    label: string,
    value: 'asc' | 'desc',
}

export interface SortDropDownProps {
    currentOption: SortOption,
    currentType: SortType,
    onSort: (sortOption: SortOption, sortType: SortType) => void
}