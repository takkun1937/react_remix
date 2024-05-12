import { MainLayout } from '~/components/layout/MainLayout';
import { WorkSpace } from '~/features/work/WorkSpace';
import { WorkSpaceProvider } from '~/features/work/providers/workSpaceProvider';

// パス「/」のコンポーネント
export default function Index() {
  return (
    <WorkSpaceProvider>
      <MainLayout children={<WorkSpace />}></MainLayout>
    </WorkSpaceProvider>
  );
}
