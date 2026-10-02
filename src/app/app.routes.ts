import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'aboutme',
    loadComponent: () => import('./features/about-me/about-me.component').then(m => m.AboutMeComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'artwork',
    loadComponent: () => import('./features/artwork/artwork.component').then(m => m.ArtworkComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'gofundme',
    loadComponent: () => import('./features/go-fund-me/go-fund-me.component').then(m => m.GoFundMeComponent)
  },
  {
    path: 'coredump',
    loadComponent: () => import('./features/core-dump/core-dump.component').then(m => m.CoreDumpComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
