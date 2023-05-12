import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressbarServiceService } from 'src/app/Services/progressbar-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private ProgressbarVisibility: ProgressbarServiceService, private router: Router) { }

  ngOnInit(): void {}

  showProgressbar() {
    this.ProgressbarVisibility.ToggleVisibility();
  }

  Login(){
    this.router.navigate(['/auth']);
  }

}
