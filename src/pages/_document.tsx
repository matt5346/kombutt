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
        <meta name="application-name" content="BitRuby" />

        <meta property="og:url" content={process.env.NEXT_PUBLIC_PROD_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Alien" />
        <meta property="og:site_name" content="Alien" />
        <meta property="og:description" content="Alien bets on web3" />
        {/* <meta property="og:image" content="/images/preview_link.png" />
        <meta property="og:image:width" content="1330" />
        <meta property="og:image:height" content="666" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content={process.env.NEXT_PUBLIC_PROD_URL}
        />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_PROD_URL}
        />
        <meta name="twitter:title" content="Alien bets" />
        <meta name="twitter:description" content="Alien bets" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:wght@400;500;700;800&family=Red+Hat+Display:wght@400;500;600;700&family=Ubuntu:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        {/* <meta name="twitter:image" content="/images/preview_link.png" /> */}
      </Head>

      <body className="theme-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
