export const replaceById = (arr, newElem) => arr.map(elem =>
    elem.id === newElem.id ? newElem : elem
)