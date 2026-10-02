export interface ArtItem {
  readonly title: string;
  readonly description: string;
  readonly src: string;
}

export const ARTWORK_ITEMS: readonly ArtItem[] = [
  {
    title: 'Menu Maker Architecture 1',
    description: 'Interface schema and requisition workflow wireframes.',
    src: 'assets/artwork/menu_maker.png'
  },
  {
    title: 'Menu Maker Architecture 2',
    description: 'Component hierarchy and recipe scaling dashboard.',
    src: 'assets/artwork/menu_maker2.png'
  },
  {
    title: 'Menu Maker Architecture 3',
    description: 'Database entity relationship diagram and table structure.',
    src: 'assets/artwork/menu_maker3.png'
  },
  {
    title: 'Menu Maker Architecture 4',
    description: 'Nutritional calculation and batch sizing view.',
    src: 'assets/artwork/menu_maker4.png'
  },
  {
    title: 'Green Bay Painting',
    description: 'Original acrylic study on textured canvas.',
    src: 'assets/artwork/green_bay_painting.jpeg'
  },
  {
    title: 'Digital Composition - Nexen',
    description: 'Digital visual rendering and graphic concept.',
    src: 'assets/artwork/nexen.jpeg'
  },
  {
    title: 'Nexen Dice',
    description: 'Geometric 3D rendering and texture exploration.',
    src: 'assets/artwork/nexen_dice.jpeg'
  }
];
