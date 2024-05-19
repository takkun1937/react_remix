import { LoaderFunctionArgs } from '@remix-run/node';
import { STATUS_CODE } from '~/common/constants/constants';
import { admin } from '~/lib/firebase_admin_server';

// パス「/api/auth」のエンドポイント
export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log(request);
  const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];

  if (!idToken) {
    throw new Response(STATUS_CODE.UNAUTHORIZED.msg, {
      status: STATUS_CODE.UNAUTHORIZED.statusCode,
    });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    return uid;
    // TODO: DBからデータ取得処理の追加
  } catch (error) {
    console.log(error);
    throw new Response(STATUS_CODE.INTERNAL_SERVER_ERROR.msg, {
      status: STATUS_CODE.INTERNAL_SERVER_ERROR.statusCode,
    });
  }
};
