import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="application-name" content="Kombutt" />
        <meta property="og:url" content="https://kombutt.wtf" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kombutt" />
        <meta property="og:site_name" content="Kombutt" />
        <meta
          property="og:description"
          content="Join Kombutt in the ultimate crypto combat!"
        />
        <meta property="og:image" content="https://kombutt.wtf/meta-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="631" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://kombutt.wtf" />
        <meta property="twitter:url" content="https://kombutt.wtf" />
        <meta name="twitter:title" content="Kombutt" />
        <meta
          name="twitter:description"
          content="Join Kombutt in the ultimate crypto combat!"
        />
        <meta name="twitter:image" content="https://kombutt.wtf/meta-img.png" />

        <link
          rel="icon"
          href="https://kombutt.wtf/favicon.png"
          type="image/png"
          sizes="any"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:wght@400;500;700;800&family=Red+Hat+Display:wght@400;500;600;700&family=Ubuntu:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="theme-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
