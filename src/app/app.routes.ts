import { Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { ContentComponent } from './layout/content/content.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { CoreDumpComponent } from './features/core-dump/core-dump.component';
import { BlogComponent } from './features/blog/blog.component';
import { GoFundMeComponent } from './features/go-fund-me/go-fund-me.component';
import { ArtworkComponent } from './features/artwork/artwork.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'aboutme', component: AboutMeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'artwork', component: ArtworkComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gofundme', component: GoFundMeComponent},
    {path: 'coredump', component: CoreDumpComponent},

];
