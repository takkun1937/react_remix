import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "~/lib/firebase";

export const useAuth = () => {
    const [authUser, setAuthUser] = useState<User | null | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setAuthUser(user);
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return {authUser, isLoading};
}