import { MainLayout } from "~/components/layout/MainLayout";
import { SignupForm } from "~/features/auth/signup/SignupForm";

// パス「/signup」のコンポーネント
export default function Signup() {

  return (
    <MainLayout 
        children={<SignupForm/>}>
    </MainLayout>
  );
}