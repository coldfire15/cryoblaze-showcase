import { Injectable, signal, computed, effect } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeMode = signal<ThemeMode>(this.getInitialTheme());


  public readonly currentTheme = computed(() => this.themeMode());
  public readonly isDark = computed(() => this.themeMode() === 'dark');

  constructor() {

    effect(() => {
      this.applyTheme(this.themeMode());
    });


    this.setupSystemPreferenceListener();
  }

  toggleTheme(): void {
    this.themeMode.update(current => current === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: ThemeMode): void {
    this.themeMode.set(theme);
  }

  private getInitialTheme(): ThemeMode {

    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      return savedTheme;
    }


    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // Default to light
    return 'light';
  }

  private applyTheme(theme: ThemeMode): void {
    // Update document
    document.documentElement.setAttribute('data-theme', theme);

    // Save in localStorage
    localStorage.setItem('theme', theme);
  }

  private setupSystemPreferenceListener(): void {
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        this.themeMode.set(e.matches ? 'dark' : 'light');

    });
  }
}
