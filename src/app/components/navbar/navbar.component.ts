import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, ROUTES} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageService} from '../../core/language.service';


interface NavItem {
  label: string;
  link: string;
  active?: boolean;
}

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslateModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(protected languageService:LanguageService) {
  }
  navItems: NavItem[] = [
    { label: 'navbar.home', link: '/home' },
    { label: 'navbar.contact', link: '/contact' },
    { label: 'navbar.about', link: '/about' }
  ];


}
