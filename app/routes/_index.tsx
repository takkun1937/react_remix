import { MainLayout } from "~/components/layout/MainLayout";
import { WorkSpace } from "~/features/work/work_space/WorkSpace";

export default function Index() {
  return (
    <MainLayout children={<WorkSpace/>}></MainLayout>
  );
}
