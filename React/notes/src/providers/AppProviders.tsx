import {AuthProvider, MenuProvider, NotesProvider} from "@/providers";
import type {PropsWithChildren} from "react";

export const AppProviders = ({children}: PropsWithChildren) =>
    <AuthProvider>
        <NotesProvider>
            <MenuProvider>
                {children}
            </MenuProvider>
        </NotesProvider>
    </AuthProvider>;