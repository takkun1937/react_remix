import { useAuth } from "~/hooks/useAuth"

export const authenticated = {
    isAuthUser: (): boolean | null => {
        const {authUser, isLoading} = useAuth();

        if (isLoading) {
            return null;
        }

        return authUser !== null;
    }
}