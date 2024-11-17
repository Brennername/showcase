import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-go-fund-me',
  standalone: true,
  imports: [],
  templateUrl: './go-fund-me.component.html',
  styleUrl: './go-fund-me.component.scss'
})
export class GoFundMeComponent {
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    // const script = this.renderer.createElement('script');
    // script.src = 'https://www.gofundme.com/static/js/embed.js';
    // script.setAttribute('defer', '');
    // this.renderer.appendChild(document.body, script);
  }
}
