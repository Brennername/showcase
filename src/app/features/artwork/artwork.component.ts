import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ARTWORK_ITEMS, ArtItem } from './artwork.model';

@Component({
    selector: 'app-artwork',
    imports: [CommonModule],
    templateUrl: './artwork.component.html',
    styleUrl: './artwork.component.scss'
})
export class ArtworkComponent {
  readonly items = signal<readonly ArtItem[]>(ARTWORK_ITEMS);
}
