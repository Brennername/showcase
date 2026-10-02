import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout-container',
    imports: [FooterComponent, HeaderComponent, RouterOutlet],
    templateUrl: './layout-container.component.html',
    styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent {
}
