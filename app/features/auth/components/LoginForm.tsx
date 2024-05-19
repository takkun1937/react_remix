import { FormEvent, JSX, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTE_PATH } from '~/common/constants/constants';
import { Button } from '~/components/elements/Button';
import { AuthContext } from '../providers/authProvider';

/**
 * ログインフォームのコンポーネント
 * @returns
 */
export const LoginForm = (): JSX.Element => {
  const { t } = useTranslation();
  const authContext = useContext(AuthContext);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  // ログインボタン押下時
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (emailInputRef.current && passwordInputRef.current) {
      try {
        const idToken = await authContext.login(
          emailInputRef.current.value,
          passwordInputRef.current.value
        );

        idToken && authContext.getAuthInfo(idToken);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className='text-center' onSubmit={handleLogin}>
      <p className='text-4xl font-bold'>{`${t('service_name')} ${t(
        'main.login_msg'
      )}`}</p>
      <p className='my-6 text-xl text-gray-500'>{`${t('main.login_lead')}`}</p>
      <p
        className={`p-4 rounded border bg-red-200 text-red-500 ${
          authContext.loginErrorMsg !== '' ? 'block' : 'hidden'
        }`}
      >
        {authContext.loginErrorMsg}
      </p>
      <div className='flex flex-col items-center'>
        <input
          ref={emailInputRef}
          type='email'
          placeholder={`${t('main.placeholder_email')}`}
          autoFocus={true}
          required
          className='w-96 mt-2.5 px-4 py-1.5 border border-gray-400 border-solid rounded text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
        />
        <input
          ref={passwordInputRef}
          type='password'
          placeholder={`${t('main.placeholder_password')}`}
          required
          className='w-96 mt-2.5 px-4 py-1.5 border border-gray-400 border-solid rounded text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
        />
        <Button
          type='submit'
          title={`${t('service_name')} ${t('button.login_msg')}`}
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
          {`${t('service_name')} のアカウントを持っていない場合は`}
          <a className='text-blue-500' href={ROUTE_PATH.SIGNUP}>{`${t(
            'button.signup'
          )}`}</a>
          へ
        </p>
      </div>
    </form>
  );
};
