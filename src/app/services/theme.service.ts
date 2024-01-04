import { Injectable } from '@angular/core';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: Theme = 'light';
  private themesConfig = new Map<Theme, any>([
    [
      'light',
      {
        primary: '#007bff',
        decor: '#007bff',
        text: '#212529',
        bg: '#fff',
        'text-title': '#808080',
      },
    ],
    [
      'dark',
      {
        primary: '#007bff',
        decor: '#007bff',
        text: '#fff',
        bg: '#444',
        'text-title': '#ccc',
      },
    ],
  ]);

  get currentTheme() {
    return this.theme;
  }

  setTheme(newTheme: Theme) {
    this.theme = newTheme;
    this.applyTheme();
  }

  private applyTheme() {
    const root = document.documentElement;
    if (this.theme && this.themesConfig.has(this.theme)) {
      Object.keys(this.themesConfig.get(this.theme)).forEach((val) => {
        root.style.setProperty(
          '--' + val,
          this.themesConfig.get(this.theme)[val]
        );
      });
    }
    // root.style.setProperty('--primary', 'red');
  }
}
