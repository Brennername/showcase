export interface ArtItem {
  readonly title: string;
  readonly description: string;
  readonly src: string;
}

export const ARTWORK_ITEMS: readonly ArtItem[] = [
  {
    title: 'Personal Logo',
    description: 'Digital visual rendering and graphic concept.',
    src: 'assets/artwork/nexen.jpeg'
  },
  {
    title: 'Jordan Love',
    description: 'Original acrylic study on textured canvas.',
    src: 'assets/artwork/green_bay_painting.jpeg'
  }
];
