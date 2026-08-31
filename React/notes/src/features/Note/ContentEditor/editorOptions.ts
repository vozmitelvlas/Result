import type {Options} from "easymde";

export const editorOptions: Options = {
    autofocus: true,
    spellChecker: false,
    status: false,
    placeholder: "Введите текст заметки...",
    toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list",
        "ordered-list", "|", "link", "code", 'table', 'check-list'],
    maxHeight: "calc(100dvh - 250px)",
    autoDownloadFontAwesome: false,
};