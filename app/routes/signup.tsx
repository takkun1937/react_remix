import { MainLayout } from '~/components/layout/MainLayout';
import { SignUpForm } from '~/features/auth/components/SignUpForm';

// パス「/signup」のコンポーネント
export default function SignUp() {
  return <MainLayout children={<SignUpForm />}></MainLayout>;
}
