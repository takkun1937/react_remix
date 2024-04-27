import { LoaderFunctionArgs, json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import i18nServer, { localeCookie } from "./common/i18next/modules/i18next.server";
import { useChangeLanguage } from "remix-i18next/react";
import "app/index.css";

export const handle = { i18n: ["translation"] };

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = await i18nServer.getLocale(request);
  return json(
    { locale, ENV: {
      REACT_APP_RAPID_API_HOST: process.env.REACT_APP_RAPID_API_HOST,
      REACT_APP_RAPID_API_KEY: process.env.REACT_APP_RAPID_API_KEY,
      REACT_APP_RAPID_API_URL: process.env.REACT_APP_RAPID_API_URL
    } },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } },
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useRouteLoaderData<typeof loader>("root");

  return (
    <html lang={loaderData?.locale ?? "ja"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <script
					dangerouslySetInnerHTML={{
						__html: `window.ENV = ${JSON.stringify(loaderData?.ENV)}`,
					}}
				/>
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
