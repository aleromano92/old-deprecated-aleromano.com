import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="theme-light bg-background text-foreground selection:bg-foreground selection:text-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
