import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import Layout from "./components/layouts/Layout";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import indexStyles from '~/styles/index.css';
import 'react-tooltip/dist/react-tooltip.css';
import styles from "~/styles/mui-alert.css";
import ActionLoaderErrorDisplay from "./components/error/ActionLoaderError";
import OtherErrorDisplay from "./components/error/OtherError";
import { Analytics } from '@vercel/analytics/react';


export const links: LinksFunction = () => [
  ...(cssBundleHref ? [
    { rel: "stylesheet", href: cssBundleHref },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: indexStyles }
  ] : []),
];

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout child={ children } />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {process.env.NODE_ENV === "production" && (
          <Analytics />
        )}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: any }) {
  const err: any = useRouteError();
  console.error("Error at root: ", err);

  let comp = (
    <OtherErrorDisplay error={ error } />
  );

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    comp = (
      <ActionLoaderErrorDisplay error={ error } />
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  return (
    <Document>
      {comp}
    </Document>
  );
}
