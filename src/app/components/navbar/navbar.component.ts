import {Component, computed, HostBinding, HostListener, inject, signal, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageInfo, LanguageService} from '../../core/language.service';
import {ThemeService} from '../../core/theme.service';

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
export class NavbarComponent implements OnInit {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);

  // Theme handling
  darkMode = computed(() => this.themeService.isDark());

  // Hero data
  hero =
    {
      fullName: 'Ahmed AMMOURI',
      positionTitle: 'CEO & Founder',
      bio: 'Sofware engineer and founder of MarginMaster',
      img: 'images/ahmed-ammouri.jpeg',
      github: 'https://github.com/coldfire15',
      linkedin: 'https://linkedin.com/in/ahmed-ammouri',
      twitter: 'https://github.com/coldfire15',
      facebook: 'https://github.com/coldfire15'
    };


  readonly navItems: NavItem[] = [
    {label: 'navbar.home', link: '/home'},
    // {label: 'navbar.about', link: '/about'},
    {label: 'navbar.contact', link: '/contact'},
  ];

  // signals
  mobileOpen = signal(false);
  langMenuOpen = signal(false);
  currentLang = computed(() => this.languageService.getCurrentLanguage());


  currentLangInfo = computed<LanguageInfo>(() =>
    this.languageService.getLanguageInfo(this.currentLang())
  );

  supportedLangsInfo = computed<LanguageInfo[]>(() =>
    this.languageService.supportedLanguages
      .map(lang => this.languageService.getLanguageInfo(lang))
  );


  @HostBinding('class.scrolled') scrolled = false;

  @HostBinding('attr.data-theme') get theme() {
    return this.darkMode() ? 'dark' : 'light';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }


  toggleMobile() {
    this.mobileOpen.update(v => !v);

    // Close language menu if open
    if (this.langMenuOpen()) {
      this.langMenuOpen.set(false);
    }
  }

  toggleLang() {
    this.langMenuOpen.update(v => !v);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  selectLanguage(lang: string) {
    if (lang === this.currentLang()) return;
    let langSymbol = lang === 'English' ? 'en' : 'fr';
    this.languageService.setLanguage(langSymbol);
    this.mobileOpen.set(false);
    this.langMenuOpen.set(false);
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;


    if (this.mobileOpen() && !target.closest('.mobile-menu-toggle') && !target.closest('.nav-container')) {
      this.mobileOpen.set(false);
    }


    if (this.langMenuOpen() && !target.closest('.language-switcher')) {
      this.langMenuOpen.set(false);
    }
  }

  ngOnInit() {

  }
}
