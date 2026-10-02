import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../theme.service';

@Component({
    selector: 'app-header',
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);
  @Output() menuToggle = new EventEmitter<void>();

  toggleMenu(): void {
    this.menuToggle.emit();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
