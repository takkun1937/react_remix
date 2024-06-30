import { JSX, ReactNode } from 'react';
import { HeaderLayout } from './HeaderLayout';
import { FooterLayout } from './FooterLayout';
import { CodeSpace } from '~/features/work/components/code_space/CodeSpace';
import { useLocation } from '@remix-run/react';
import { ROUTE_PATH } from '~/common/constants/constants';
import { RndLayout } from './RndLayout';

/**
 * メインレイアウトタイプ
 * @property children - ReactNode
 */
type MainLayoutProps = {
  children: ReactNode;
};

/**
 * メインレイアウトのコンポーネント
 * @param props
 * @returns
 */
export const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const location = useLocation();

  return (
    <div className='flex flex-col h-screen'>
      <HeaderLayout />
      {props.children}
      <FooterLayout />
      {location.pathname === ROUTE_PATH.ROOT && (
        <RndLayout>
          <CodeSpace />
        </RndLayout>
      )}
    </div>
  );
};
