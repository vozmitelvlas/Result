export const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-En', {
        day: "numeric",
        month: "long",
        year: "numeric"
    });