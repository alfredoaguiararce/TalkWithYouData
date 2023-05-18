import { Component } from '@angular/core';
import { ProgressbarServiceService } from 'src/app/Services/progressbar-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(public ProgressbarVisibility: ProgressbarServiceService) { }

}
