import { makeAutoObservable, runInAction } from "mobx";

import messagesEnglish from "@/assets/lang/en.json";

export type Language = {
  value: string;
  label: string;
};

const langKey = "alien_bets.language";

export const availableLanguages: Language[] = [
  {
    value: "en",
    label: "English"
  },
  {
    value: "ind",
    label: "Indonesian"
  },
  {
    value: "ru",
    label: "Russian"
  },
  {
    value: "ar",
    label: "عربى"
  }
];

const setLanguageInStore = (language: Language) => {
  if (typeof window === "undefined") return null;
  localStorage?.setItem(langKey, language.value);
};

export class LanguageStore {
  constructor(protected languageVal: string) {
    makeAutoObservable(this);
    const lang: Language =
      availableLanguages.find((x) => x.value === languageVal) ??
      availableLanguages[0];

    this.init(lang);
  }

  initialized = false;
  language: Language | null = null;

  init(val: Language) {
    this.setLanguage(val);

    runInAction(() => {
      this.initialized = true;
    });
  }

  setLanguage(language: Language) {
    if (this.language?.value === language.value) return;

    runInAction(() => {
      this.language = language;
    });

    setLanguageInStore(language);
  }

  get availableLanguages() {
    return availableLanguages;
  }

  get messages() {
    switch (this.language?.value) {
      case "en":
        return messagesEnglish;
      default:
        return messagesEnglish;
    }
  }
}
