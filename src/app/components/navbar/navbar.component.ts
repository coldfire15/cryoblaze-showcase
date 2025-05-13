import {Component, computed, HostBinding, HostListener, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageInfo, LanguageService} from '../../core/language.service';

interface NavItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private languageService = inject(LanguageService);

  // static nav items
  readonly navItems: NavItem[] = [
    {label: 'navbar.home', link: '/home'},
    {label: 'navbar.about', link: '/about'},
    {label: 'navbar.contact', link: '/contact-message'},
  ];

  // signals
  mobileOpen = signal(false);
  langMenuOpen = signal(false);
  currentLang = computed (()=>this.languageService.getCurrentLanguage());


  // derived/computed state
  currentLangInfo = computed<LanguageInfo>(() =>
    this.languageService.getLanguageInfo(this.currentLang())
  );

  supportedLangsInfo = computed<LanguageInfo[]>(() =>
    this.languageService.supportedLanguages
      .map(lang => this.languageService.getLanguageInfo(lang))
  );


  // sticky scroll
  @HostBinding('class.scrolled') scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }

  // toggles
  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  toggleLang() {
    this.langMenuOpen.update(v => !v);
  }

  // select language and close menus
  selectLanguage(lang: string) {
    if (lang === this.currentLang()) return;
    let langSymbol = lang === 'English' ? 'en' : 'fr';
    this.languageService.setLanguage(langSymbol);
    this.mobileOpen.set(false);
    this.langMenuOpen.set(false);
  }

}
