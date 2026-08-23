import {NotesContext} from "../context";
import {useContext} from "react";

export const useNoteActions = () => {
    const context = useContext(NotesContext);
    if (!context)
        throw new Error("useNotes must be used inside NotesProvider");

    return context;
};