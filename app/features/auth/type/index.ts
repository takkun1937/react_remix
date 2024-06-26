/**
 * AuthUserAPIフックのタイプ
 */
export type AuthContextType = {
    authErrorMsg: string,
    login: (email: string, password: string) => Promise<string | undefined>;
    signUp: (email: string, password: string) => Promise<string | undefined>;
    getAuthLoginInfo: (idToken: string) => void;
    saveAuthRegisterInfo: (idToken: string, userName: string) => void;
}