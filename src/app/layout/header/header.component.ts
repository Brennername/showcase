import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../theme.service';

export interface NavItem {
  readonly path: string;
  readonly label: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);

  readonly menuOpen = signal(false);

  readonly navItems: readonly NavItem[] = [
    { path: '/home', label: 'Home' },
    { path: '/aboutme', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/artwork', label: 'Artwork' },
    { path: '/contact', label: 'Contact' },
    { path: '/gofundme', label: 'Crowdfunding' },
    { path: '/coredump', label: 'Core Dump' }
  ];

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
