import { useLocation, useNavigate } from '@remix-run/react';
import { JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { ROUTE_PATH } from '~/common/constants/constants';
import { Button } from '../elements/Button';
import { useAuth } from '~/hooks/useAuth';
import { auth } from '~/lib/firebase';

/**
 * ヘッダーレイアウトのコンポーネント
 * @returns
 */
export const HeaderLayout = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { authUser, isLoading } = useAuth();

  if (isLoading) {
    return <></>;
  }

  // ログアウト
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        navigate(ROUTE_PATH.LOGIN);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='px-8 pt-2 bg-white'>
      <div className='flex justify-between'>
        <Button
          title={`${t('service_name')}`}
          className={{
            bgColor: 'bg-green-500',
            fontSize: 'text-base',
            fontColor: 'text-white',
            fontWeight: 'font-bold',
          }}
          onClick={() => navigate(ROUTE_PATH.ROOT)}
        ></Button>
        <div className='flex'>
          {authUser ? (
            <Button
              title={`${t('button.logout')}`}
              className={{
                bgColor: 'bg-white',
                fontSize: 'text-base',
                fontColor: 'text-green-700',
                hoverColor: 'bg-gray-100',
                props: 'border border-green-700 border-solid',
              }}
              onClick={logout}
            ></Button>
          ) : (
            <>
              <Button
                title={`${t('button.login')}`}
                className={{
                  bgColor: 'bg-white',
                  fontSize: 'text-base',
                  fontColor: 'text-green-700',
                  hoverColor: 'bg-gray-100',
                  props: 'border border-green-700 border-solid',
                }}
                onClick={() => navigate(ROUTE_PATH.LOGIN)}
              ></Button>
              <Button
                title={`${t('button.signup')}`}
                className={{
                  bgColor: 'bg-green-700',
                  fontSize: 'text-base',
                  fontColor: 'text-white',
                  hoverColor: 'bg-green-800',
                  props: 'ml-2',
                }}
                onClick={() => navigate(ROUTE_PATH.SIGNUP)}
              ></Button>
            </>
          )}
        </div>
      </div>
      <div>
        <button
          className={`h-10 px-4 pt-2 text-sm font-semibold ${
            location.pathname === ROUTE_PATH.ROOT
              ? 'border-b-4 border-green-500 text-black'
              : 'text-gray-500 hover:text-black'
          }`}
          onClick={() => navigate(ROUTE_PATH.ROOT)}
        >{`${t('header.work_space')}`}</button>
        <button
          className={`h-10 px-4 pt-2 text-sm font-semibold ${
            location.pathname === ROUTE_PATH.TASK_REGISTRATION
              ? 'border-b-4 border-green-500 text-black'
              : 'text-gray-500 hover:text-black'
          }`}
          onClick={() => navigate(ROUTE_PATH.TASK_REGISTRATION)}
        >{`${t('header.task_registration')}`}</button>
      </div>
    </div>
  );
};
