import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { LeftbarComponent } from '../leftbar/leftbar.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout-container',
    imports: [FooterComponent, LeftbarComponent, HeaderComponent, RouterOutlet],
    templateUrl: './layout-container.component.html',
    styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent {
  @ViewChild('leftbar') leftbar!: LeftbarComponent;

  toggleLeftbarMenu() {
    this.leftbar.toggleMenu();
  }
}
