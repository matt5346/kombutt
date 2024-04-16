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
        <title>Alien Bets</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <RenderLayout>
        <Component {...pageProps} />
      </RenderLayout>
    </ProvideBaseStores>
  );
};

export default observer(App);
