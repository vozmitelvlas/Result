export const formatDate = (stringDate, dateSeparator = ".", timeSeparator = ":") => {
    const date = new Date(stringDate)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    const year = date.getFullYear()
    return [day, month, year].join(dateSeparator) + " " + [hours, minutes, seconds].join(timeSeparator)
}