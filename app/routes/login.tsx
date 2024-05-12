import { MainLayout } from '~/components/layout/MainLayout';
import { LoginForm } from '~/features/auth/components/LoginForm';

// パス「/login」のコンポーネント
export default function Login() {
  return <MainLayout children={<LoginForm />}></MainLayout>;
}
