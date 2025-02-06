export function getTimeFormat(date, separator = ":") {
    const timeParts = [date.getHours(), date.getMinutes(), date.getSeconds()];
    return timeParts.map(part => part.toString().padStart(2, '0')).join(separator);
}


export function getDateFormat(date, separator = ".") {
    let str = []
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear().toString().slice(-2);
    str.push(day, month, year)

    str.forEach((elem, index) => {
        str[index] = String(elem).padStart(2, '0')
    });

    return str.join(`${separator}`)
}