import { Component, Inject } from '@angular/core';
import { Router, } from '@angular/router';


@Component({
  selector: 'app-leftbar',
  standalone: true,
  imports: [],
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.scss'
})
export class LeftbarComponent {



  constructor(@Inject(Router)
  private router: Router)
  {
    this.router = router;
  }

  navTo(route: string)
  {
    this.router.navigate([route]);
  }



  navigateToHome()
  {
    this.router.navigate(['/home']);
  }
  navigateToAboutMe()
  {
    this.router.navigate(['/aboutme']);
  }
  navigateToProjects()
  {
    this.router.navigate(['/projects']);
  }
  navigateToBlog()
  {
    this.router.navigate(['/blog']);
  }
  navigateToContact()
  {
    this.router.navigate(['/contact']);
  }
  navigateToCoreDump() {
    this.router.navigate(['/coredump']);
  }
}
