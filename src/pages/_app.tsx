import { observer } from "mobx-react-lite";
import "@/styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import RenderLayout from "@/components/layout/renderLayout";
import { ProvideBaseStores } from "@/providers/BaseStoresProvider";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ProvideBaseStores>
      <Head>
        <title>Kombutt</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <meta property="og:url" content="https://kombutt.wtf" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kombutt" />
        <meta property="og:site_name" content="Kombutt" />
        <meta
          property="og:description"
          content="Kombutt.io - Join Kombutt in the ultimate crypto combat!"
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
          content="Kombutt.io - Join Kombutt in the ultimate crypto combat!"
        />
        <meta name="twitter:image" content="https://kombutt.wtf/meta-img.png" />
      </Head>

      <RenderLayout>
        <Component {...pageProps} />
      </RenderLayout>
    </ProvideBaseStores>
  );
};

export default observer(App);
