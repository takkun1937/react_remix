import { MainLayout } from '~/components/layout/MainLayout';
import { PostSpace } from '~/features/post/PostSpace';
import { PostSpaceProvider } from '~/features/post/providers/postSpaceProvider';

// パス「/post」のコンポーネント
export default function Index() {
  return (
    <PostSpaceProvider>
      <MainLayout children={<PostSpace />}></MainLayout>
    </PostSpaceProvider>
  );
}
