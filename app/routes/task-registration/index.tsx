import { useNavigate } from '@remix-run/react';
import { ROUTE_PATH } from '~/common/constants/constants';
import { useAuth } from '~/hooks/useAuth';

// パス「/task-registration」のコンポーネント
export default function TaskRegistration() {
  const { authUser, isLoading } = useAuth();
  const navigate = useNavigate();

  if (!authUser) {
    navigate(ROUTE_PATH.LOGIN);
    return <h1>認証してください。</h1>;
  }
  return <h1>Hello World!</h1>;
}
