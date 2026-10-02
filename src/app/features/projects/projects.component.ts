import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FEATURED_PROJECTS, Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = signal<readonly Project[]>(FEATURED_PROJECTS);
}
