import { MainLayout } from '~/components/layout/MainLayout';
import { Auth } from '~/features/auth/auth';
import { AuthProvider } from '~/features/auth/providers/authProvider';

// パス「/signup」のコンポーネント
export default function SignUp() {
  return (
    <AuthProvider>
      <MainLayout children={<Auth />}></MainLayout>;
    </AuthProvider>
  );
}
