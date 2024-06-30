import { MainLayout } from '~/components/layout/MainLayout';
import { Auth } from '~/features/auth/auth';
import { AuthProvider } from '~/features/auth/providers/authProvider';

// パス「/login」のコンポーネント
export default function Login() {
  return (
    <AuthProvider>
      <MainLayout children={<Auth />}></MainLayout>;
    </AuthProvider>
  );
}
