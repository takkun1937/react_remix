import { LoaderFunctionArgs, json } from '@remix-run/node';
import {
  Links,
  Meta,
  Navigate,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useRouteLoaderData,
} from '@remix-run/react';
import i18nServer, {
  localeCookie,
} from './common/i18next/modules/i18next.server';
import { useChangeLanguage } from 'remix-i18next/react';
import 'app/index.css';
import { ROUTE_PATH } from './common/constants/constants';

export const handle = { i18n: ['translation'] };

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18nServer.getLocale(request);
  return json(
    { locale },
    { headers: { 'Set-Cookie': await localeCookie.serialize(locale) } }
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData<typeof loader>('root');
  const location = useLocation();
  // if (location.pathname === ROUTE_PATH.SIGNUP) {
  //   children = <Navigate to={ROUTE_PATH.LOGIN}></Navigate>;
  // }

  return (
    <html lang={loaderData?.locale ?? 'ja'}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { locale } = useLoaderData<typeof loader>();
  useChangeLanguage(locale);
  return <Outlet />;
}
