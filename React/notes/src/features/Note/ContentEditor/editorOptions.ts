import type {Options} from "easymde";

export const editorOptions: Options = {
    autofocus: true,
    spellChecker: false,
    status: false,
    placeholder: "Введите текст заметки...",
    toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list",
        "ordered-list", "|", "link", "code", "preview",],
};