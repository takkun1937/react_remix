// ユーザー名のバリデーションチェック
export const validateUsername = (username: string): boolean => {
    const usernameRegex = /^.{3,50}$/;
    if (usernameRegex.test(
        username
    )) {
        return true;
    } else {
        return false;
    }
}

// メールアドレスのバリデーションチェック
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

// パスワードのバリデーションチェック
export const validatePassword = (password: string): boolean => {
    const passwordRegex = /^[\x20-\x7E]{8,32}$/;
    if (passwordRegex.test(password)) {
        return true;
    } else {
        return false;
    }
}
