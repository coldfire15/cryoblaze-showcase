import {computed, Injectable, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';



@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly currentLanguage = signal<string>('fr');
  readonly supportedLanguages = ['en','fr'];
  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();
    let initialLang = ''
    if (browserLang != null) {
      initialLang = savedLang || (this.supportedLanguages.includes(browserLang) ? browserLang : 'fr');
    }
    this.setLanguage(initialLang)
  }

  getCurrentLanguage() {
    return this.currentLanguage.asReadonly();
  }

  setLanguage(lang: string) {
    if(this.supportedLanguages.includes(lang)) {
      this.currentLanguage.set(lang);
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
    }
  }

  getLanguageInfo(lang:string){
    return {
      'en':{name:'English', flag:'🇺🇸'},
      'fr':{name:'France', flag:'🇫🇷'},
    }[lang] || {name:lang.toUpperCase(),flag: ''};
  }

}
