import { useState } from "react";
import { FirebaseErrorCode, REQUEST_PATH, STATUS_CODE } from "~/common/constants/constants";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/lib/firebase";
import { useTranslation } from "react-i18next";
import { AuthContextType } from "../type";
import axios from "axios";

/**
 * 認証周りののApiフック
 * @return WorkSpaceContextType
 */
export const useAuth = (): AuthContextType => {
  const {t} = useTranslation();
  const [authErrorMsg, setAuthErrorMsg] = useState<string>('');

  /**
  * メールアドレスとパスワードでFirebaseへログイン認証
  * @param email
  * @param password
  */
  const login = async (email: string, password: string): Promise<string | undefined> => {
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          return await user.getIdToken();
      } catch (error: any) {
        if (error.code === FirebaseErrorCode.INVALID_LOGIN_CREDENTIALS) {
          setAuthErrorMsg(t('error_msg.email_or_password_error'));
        } else {
          setAuthErrorMsg(t('error_msg.failed_login'));
        }
        throw error;
      }
  }

  /**
   * 新規登録
   * @param email 
   * @param password 
   * @returns 
   */
  const signUp = async (email: string, password: string): Promise<string | undefined> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return await user.getIdToken();
    } catch (error: any) {
      if (error.code === FirebaseErrorCode.EMAIL_EXISTS) {
        setAuthErrorMsg(t('error_msg.email_already_in_use'));
      } else {
        setAuthErrorMsg(t('error_msg.failed_signup'));
      }
      throw error;
    }
  }

  /**
  * ログインユーザー情報取得
  * @param idToken IDトークン
  */
  const getAuthLoginInfo = (idToken: string) => {
    axios.get(REQUEST_PATH.API_AUTH, {
      headers: {
        Authorization: `Bearer ${idToken}`
      }
    }).then((response) => {
      console.log(response);
      if (response.status === STATUS_CODE.OK.statusCode) {
        console.log(response.data);
        // TODO: ローカルストレージに保存
      }
    }).catch((error) => {
      setAuthErrorMsg(t('error_msg.auth_error'));
      throw error;
    });
  }

  /**
  * 新規登録ユーザー情報登録
  * @param idToken IDトークン
  * @param userName ユーザー名
  */
  const saveAuthRegisterInfo = (idToken: string, userName: string) => {
    axios.post(REQUEST_PATH.API_AUTH,
      {
        userName: userName
      },
      {
        headers: {
          Authorization: `Bearer ${idToken}`
        }
    }).then((response) => {
      console.log(response);
      if (response.status === STATUS_CODE.OK.statusCode) {
        console.log(response.data);
        // TODO: ローカルストレージに保存
      }
    }).catch((error) => {
      setAuthErrorMsg(t('error_msg.auth_error'));
      throw error;
    });
  }

  return {
      authErrorMsg,
      login,
      signUp,
      getAuthLoginInfo,
      saveAuthRegisterInfo
  }
}