import { JSX } from 'react';
import { ContentLayout } from '~/components/layout/ContentLayout';
import { useTranslation } from 'react-i18next';
import { ROUTE_PATH } from '~/common/constants/constants';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';
import { useLocation } from '@remix-run/react';

/**
 * ログインフォームのコンポーネント
 * @returns
 */
export const Auth = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const isLoginPath = location.pathname === ROUTE_PATH.LOGIN;

  return (
    <ContentLayout
      title={isLoginPath ? `${t('title.login')}` : `${t('title.signup')}`}
    >
      <div className='flex flex-col justify-center items-center grow px-8 bg-gray-100'>
        {isLoginPath ? <LoginForm /> : <SignUpForm />}
      </div>
    </ContentLayout>
  );
};
