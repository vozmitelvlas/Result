const formatters = {
    timeOnly: new Intl.DateTimeFormat('ru-RU', {hour: '2-digit', minute: '2-digit'}),
    dateOnly: new Intl.DateTimeFormat('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'}),
    dateTime: new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }),
};

export const formatNoteDate = (date: Date, mode: 'notesList' | 'noteContent' = 'notesList',): string => {
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    if (mode === 'notesList') {
        return isToday ? formatters.timeOnly.format(date) : formatters.dateOnly.format(date);
    }

    return formatters.dateTime.format(date);
};