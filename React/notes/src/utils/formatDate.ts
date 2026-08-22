export const formatNoteDate = (
    date: Date,
    mode: 'notesList' | 'noteContent' = 'notesList',
) => {
    const now = new Date();

    const isToday =
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate();

    const options: Intl.DateTimeFormatOptions =
        mode === 'notesList' && isToday
            ? {
                hour: '2-digit',
                minute: '2-digit',
            }
            : {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            };

    return new Intl.DateTimeFormat('ru-RU', options).format(date);
};