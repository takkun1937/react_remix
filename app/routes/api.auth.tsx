import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { STATUS_CODE } from '~/common/constants/constants';
import { db } from '~/db.server';
import { admin } from '~/lib/firebase_admin_server';

// DBからUserテーブルの情報取得
const getUserData = async (uid: string) => {
  const user = await db.user.findUnique({
    where: {
      uid: uid,
    },
    select: {
      uid: true,
      userName: true,
    },
  });

  return user;
};

// 新規ユーザー情報をDBに保存
export const saveUserData = async (uid: string, userName: string) => {
  const newUser = await db.user.create({
    data: {
      uid: uid,
      userName: userName,
    },
  });

  return newUser;
};

// パス「/api/auth」のGetリクエストエンドポイント
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];

  if (!idToken) {
    throw new Response(STATUS_CODE.UNAUTHORIZED.msg, {
      status: STATUS_CODE.UNAUTHORIZED.statusCode,
    });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const user = await getUserData(uid);
    return user;
  } catch (error) {
    throw new Response(STATUS_CODE.INTERNAL_SERVER_ERROR.msg, {
      status: STATUS_CODE.INTERNAL_SERVER_ERROR.statusCode,
    });
  }
};

// パス「/api/auth」のPostリクエストエンドポイント
export const action = async ({ request }: ActionFunctionArgs) => {
  const idToken = request.headers.get('Authorization')?.split('Bearer ')[1];
  const { userName } = await request.json();

  if (!idToken || !userName) {
    throw new Response(STATUS_CODE.UNAUTHORIZED.msg, {
      status: STATUS_CODE.UNAUTHORIZED.statusCode,
    });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    return await saveUserData(uid, userName);
  } catch (error) {
    throw new Response(STATUS_CODE.INTERNAL_SERVER_ERROR.msg, {
      status: STATUS_CODE.INTERNAL_SERVER_ERROR.statusCode,
    });
  }
};
