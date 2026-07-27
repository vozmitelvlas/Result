export interface SortOption {
    label: string,
    value: 'date' | 'name',
}

export interface SortType {
    label: string,
    value: 'asc' | 'desc',
}

export interface SortDropDownProps {
    currentOption: SortOption | undefined,
    currentType: SortType | undefined,
    onSort: (sortOption: SortOption | undefined, sortType: SortType | undefined) => void
}