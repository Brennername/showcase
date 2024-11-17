import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-artwork',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.scss',
  providers: [HttpClient]
})

export class ArtworkComponent implements OnInit {
  images: string[] = [];
  sanitizedImages: any[] = [];

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit() {
    console.log("got here 1: " + this.http);
    this.http.get('assets/artwork/', { responseType: 'text' })
      .subscribe(response => {
        const imageUrls = response.split('\n').filter(line => line.trim() !== '');
        this.sanitizedImages = imageUrls.map(url => this.sanitizer.bypassSecurityTrustResourceUrl(`assets/artwork/${url}`));
      });
      console.log(this.sanitizedImages);
  }
}
