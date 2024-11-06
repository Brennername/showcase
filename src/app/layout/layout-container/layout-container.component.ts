import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { LeftbarComponent } from "../leftbar/leftbar.component";
import { HeaderComponent } from "../header/header.component";
import { RightbarComponent } from "../rightbar/rightbar.component";
import { ContentComponent } from "../content/content.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-container',
  standalone: true,
  imports: [FooterComponent, LeftbarComponent, HeaderComponent, RightbarComponent, ContentComponent, RouterOutlet],
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent {

}
