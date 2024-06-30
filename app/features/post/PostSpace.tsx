import { JSX } from 'react';
import { ContentLayout } from '~/components/layout/ContentLayout';
import { useTranslation } from 'react-i18next';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { useAuth } from '~/hooks/useAuth';
import { useNavigate } from '@remix-run/react';
import { ROUTE_PATH } from '~/common/constants/constants';

/**
 * 課題・記事投稿のコンポーネント
 * @returns
 */
export const PostSpace = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { authUser, isLoading } = useAuth();

  if (isLoading) {
    return <></>;
  }

  if (!authUser) {
    navigate(ROUTE_PATH.LOGIN);
    return <></>;
  }

  return (
    <ContentLayout title={`${t('title.post_space')}`}>
      <div className='flex justify-center items-center grow px-8 py-3 bg-gray-100'>
        <div className='w-1/2 h-full'>
          <Editor></Editor>
        </div>
        <div className='flex-1 h-full p-4 bg-white'>
          <Preview></Preview>
        </div>
      </div>
    </ContentLayout>
  );
};
