import {onAuthStateChanged, signInWithEmailAndPassword, signOut, type User} from "firebase/auth";
import {type PropsWithChildren, useCallback, useEffect, useState} from "react";
import {AuthContext} from "@/context";
import {syncNotes} from "@/services";
import {auth} from "@/lib";


export const AuthProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        return onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser)
                await syncNotes(firebaseUser.uid);
            setIsLoading(false);
        });
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
        } catch (error) {
            throw new Error("Не удалось выполнить вход", {cause: error});
        }
    }, []);

    const logout = useCallback(async () => await signOut(auth), []);

    return (
        <AuthContext value={{
            user,
            login,
            logout,
            isAuthenticated: !!user,
            isLoading,
        }}>
            {children}
        </AuthContext>
    );
};