import { MainLayout } from '~/components/layout/MainLayout';
import { Auth } from '~/features/auth/auth';

// パス「/login」のコンポーネント
export default function Login() {
  return <MainLayout children={<Auth />}></MainLayout>;
}
