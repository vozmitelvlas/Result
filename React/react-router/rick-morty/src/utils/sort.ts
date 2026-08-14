const sortByDate = <T extends { created: string }>(arr: T[], type: 'asc' | 'desc'): T[] =>
    arr.toSorted((a, b) => {
        const dateA = Date.parse(a.created);
        const dateB = Date.parse(b.created);

        if (Number.isNaN(dateA) || Number.isNaN(dateB)) {
            return 0;
        }

        return type === "asc" ? dateA - dateB : dateB - dateA;
    });

const sortByName = <T extends { name: string }>(arr: T[], type: 'asc' | 'desc' = 'asc') =>
    arr.toSorted((a, b) => {
        const smt = a.name.localeCompare(b.name, undefined, {
            sensitivity: 'base',
            numeric: true
        });
        return type === 'asc' ? smt : -smt;
    });

export const sort = <T extends {
    name: string,
    created: string,
}>(arr: T[], type: 'asc' | 'desc' | undefined, sort: 'name' | 'date' | undefined): T[] => {
    switch (type) {
        case 'asc':
            return sort === 'name' ? sortByName(arr, 'asc') : sortByDate(arr, 'asc');
        case 'desc':
            return sort === 'name' ? sortByName(arr, 'desc') : sortByDate(arr, 'desc');
        default:
            return arr;
    }
};