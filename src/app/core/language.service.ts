import {Injectable, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export interface LanguageInfo {
  name: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage = signal<string>('fr');
  readonly supportedLanguages = ['en', 'fr'];

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();
    const initialLang =
      savedLang && this.supportedLanguages.includes(savedLang)
        ? savedLang
        : this.supportedLanguages.includes(<string>browserLang)
          ? browserLang
          : 'fr';

    this.setLanguage(typeof initialLang === "string" ? initialLang : 'fr');
  }

  getCurrentLanguage() {
    return this.currentLanguage();
  }

  setLanguage(lang: string) {
    if (this.supportedLanguages.includes(lang)) {
      this.currentLanguage.set(lang);
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
    }
  }

  private languageMap: Record<string, LanguageInfo> = {
    en: {name: 'English', flag: '🇺🇸'},
    fr: {name: 'French', flag: '🇫🇷'},
  };

  getLanguageInfo(lang: string): LanguageInfo {
    return this.languageMap[lang] || {name: lang.toUpperCase(), flag: ''};
  }

}
