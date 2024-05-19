/**
 * AuthUserAPIフックのタイプ
 */
export type AuthContextType = {
    loginErrorMsg: string,
    login: (email: string, password: string) => Promise<string | undefined>;
    getAuthInfo: (idToken: string) => void;
}