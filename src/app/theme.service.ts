import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /**
   * Reactive signal holding current active theme mode.
   * Defaults to dark or user system preference if stored.
   */
  readonly currentTheme = signal<ThemeMode>('dark');

  constructor() {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme-mode') as ThemeMode | null;
      if (storedTheme === 'dark' || storedTheme === 'light') {
        this.currentTheme.set(storedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        this.currentTheme.set('light');
      }
    }

    // Effect applies the data-theme attribute onto root html element
    effect(() => {
      const mode = this.currentTheme();
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('theme-mode', mode);
      }
    });
  }

  /**
   * Toggles between dark and light themes.
   */
  toggleTheme(): void {
    this.currentTheme.update(mode => (mode === 'dark' ? 'light' : 'dark'));
  }
}
