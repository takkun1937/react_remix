import { MainLayout } from "~/components/layout/MainLayout";
import { WorkSpace } from "~/features/work/work_space/WorkSpace";
import { WorkSpaceProvider } from "~/features/work/work_space/providers/workSpaceProvider";

// パス「/」のコンポーネント
export default function Index() {

  return (
    <WorkSpaceProvider>
      <MainLayout 
        children={<WorkSpace/>}>
      </MainLayout>
    </WorkSpaceProvider>
  );
}
