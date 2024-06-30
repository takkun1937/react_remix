import { FormEvent, JSX, useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTE_PATH } from '~/common/constants/constants';
import { Button } from '~/components/elements/Button';
import { AuthContext } from '../providers/authProvider';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '~/util/validation';
import { useNavigate } from '@remix-run/react';

/**
 * 新規登録フォームのコンポーネント
 * @returns
 */
export const SignUpForm = (): JSX.Element => {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [usernameValidateError, setUsernameValidateError] =
    useState<string>('');
  const [emailValidateError, setEmailValidateError] = useState<string>('');
  const [passwordValidateError, setPasswordValidateError] =
    useState<string>('');
  const navigate = useNavigate();

  // 新規登録押下時
  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    if (
      usernameInputRef.current &&
      emailInputRef.current &&
      passwordInputRef.current
    ) {
      try {
        const isValidateUsername = validateUsername(
          usernameInputRef.current.value
        );
        const isValidateEmail = validateEmail(emailInputRef.current.value);
        const isValidatePassword = validatePassword(
          passwordInputRef.current.value
        );

        if (!isValidateUsername || !isValidateEmail || !isValidatePassword) {
          isValidateUsername
            ? setUsernameValidateError('')
            : setUsernameValidateError(t('error_msg.invalid_username'));
          isValidateEmail
            ? setEmailValidateError('')
            : setEmailValidateError(t('error_msg.invalid_email'));
          isValidatePassword
            ? setPasswordValidateError('')
            : setPasswordValidateError(t('error_msg.invalid_password'));
          return;
        }

        const idToken = await authContext.signUp(
          emailInputRef.current.value,
          passwordInputRef.current.value
        );

        idToken &&
          authContext.saveAuthRegisterInfo(
            idToken,
            usernameInputRef.current.value
          );
        navigate(ROUTE_PATH.ROOT);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className='text-center' onSubmit={handleSignUp}>
      <p className='text-4xl font-bold'>{`${t('service_name')} ${t(
        'main.welcome_msg'
      )}`}</p>
      <p className='my-6 text-xl text-gray-500'>{`${t('main.signup_lead')}`}</p>
      <p
        className={`p-4 rounded border bg-red-200 text-red-500 ${
          authContext.authErrorMsg !== '' ? 'block' : 'hidden'
        }`}
      >
        {authContext.authErrorMsg}
      </p>
      <div className='flex flex-col items-center'>
        <input
          ref={usernameInputRef}
          type='text'
          placeholder={`${t('main.placeholder_username')}`}
          autoFocus={true}
          required
          className='w-96 mt-2.5 px-4 py-1.5 border border-gray-400 border-solid rounded text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
        />
        <p className='w-96 mt-2.5 text-xs text-red-600'>
          {usernameValidateError}
        </p>
        <input
          ref={emailInputRef}
          type='email'
          placeholder={`${t('main.placeholder_email')}`}
          required
          className='w-96 mt-2.5 px-4 py-1.5 border border-gray-400 border-solid rounded text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
        />
        <p className='w-96 mt-2.5 text-xs text-red-600'>{emailValidateError}</p>
        <input
          ref={passwordInputRef}
          type='password'
          placeholder={`${t('main.placeholder_password')}`}
          required
          className='w-96 mt-2.5 px-4 py-1.5 border border-gray-400 border-solid rounded text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
        />
        <p className='w-96 mt-2.5 text-xs text-red-600'>
          {passwordValidateError}
        </p>
        <Button
          title={`${t('service_name')} ${t('button.signup_msg')}`}
          type='submit'
          className={{
            bgColor: 'bg-green-500',
            fontSize: 'text-base',
            fontColor: 'text-white',
            fontWeight: 'font-bold',
            hoverColor: 'bg-green-700',
            props: 'w-96 my-2.5',
          }}
          onClick={() => {}}
        ></Button>
        <p className='text-sm text-gray-500'>
          {`${t('service_name')} のアカウントを持っている場合は`}
          <a className='text-blue-500' href={ROUTE_PATH.LOGIN}>{`${t(
            'button.login'
          )}`}</a>
          へ
        </p>
      </div>
    </form>
  );
};
