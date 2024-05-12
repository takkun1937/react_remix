import { MainLayout } from '~/components/layout/MainLayout';
import { Auth } from '~/features/auth/auth';

// パス「/signup」のコンポーネント
export default function SignUp() {
  return <MainLayout children={<Auth />}></MainLayout>;
}
