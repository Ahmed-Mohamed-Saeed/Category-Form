import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <meta name="application-name" content="Michanes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Michanes" />
        <meta name="description" content="Michanes real estate directory" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#077b7a" />
      </Head>
      <body dir="rtl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
