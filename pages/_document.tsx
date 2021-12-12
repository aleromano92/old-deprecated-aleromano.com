import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="theme-light bg-background text-foreground">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
