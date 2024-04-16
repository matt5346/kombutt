import { LanguageStore } from "@/stores/LanguageStore";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useRouter } from "next/router";
import { createContext, useMemo } from "react";
import { IntlProvider } from "react-intl";

export type BaseStores = object;

const baseStoreContext = createContext<BaseStores>({} as BaseStores);

export const ProvideBaseStores = observer(({ children }: any) => {
  const router = useRouter();
  const languageStore = useLocalObservable(
    () => new LanguageStore(router.locale ?? "en")
  );

  const stores = useMemo(
    () => ({
      languageStore
    }),
    [languageStore]
  );

  return (
    <baseStoreContext.Provider value={stores}>
      <IntlProvider
        defaultLocale={"en"}
        locale={languageStore.language?.value ?? "en"}
        messages={languageStore.messages}
      >
        {children}
      </IntlProvider>
    </baseStoreContext.Provider>
  );
});
