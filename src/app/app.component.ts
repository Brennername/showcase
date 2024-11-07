import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutContainerComponent } from "./layout/layout-container/layout-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
