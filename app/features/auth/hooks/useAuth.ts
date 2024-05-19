import { useState } from "react";
import { REQUEST_PATH, STATUS_CODE } from "~/common/constants/constants";
import { signInWithEmailAndPassword } from "firebase/auth";
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
  const [loginErrorMsg, setLoginErrorMsg] = useState<string>('');

  /**
  * メールアドレスとパスワードでFirebaseへログイン認証
  * @param email
  * @param password
  */
  const login = async (email: string, password: string): Promise<string | undefined> => {
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          //ユーザのIDトークンを取得
          return await user.getIdToken();
      } catch (error: any ) {
        setLoginErrorMsg(t('error_msg.email_or_password_error') as string)
        throw error
      }
  }

  /**
  * 認証情報取得
  * @param idToken IDトークン
  */
  const getAuthInfo = (idToken: string) => {
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
      setLoginErrorMsg(t('error_msg.failed_login') as string)
      throw error;
    });
  }

  return {
      loginErrorMsg,
      login,
      getAuthInfo
  }
}