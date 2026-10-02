import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  readonly path: string;
  readonly label: string;
}

@Component({
    selector: 'app-leftbar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './leftbar.component.html',
    styleUrl: './leftbar.component.scss'
})
export class LeftbarComponent {
  private readonly router = inject(Router);

  menuVisible = false;

  readonly navItems: readonly NavItem[] = [
    { path: '/home', label: 'Home' },
    { path: '/aboutme', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/artwork', label: 'Artwork' },
    { path: '/contact', label: 'Contact' },
    { path: '/coredump', label: 'Core Dump' }
  ];

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu(): void {
    this.menuVisible = false;
  }
}
