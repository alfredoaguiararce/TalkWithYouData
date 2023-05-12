import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressbarServiceService {
  IsVisible : boolean = false;

  ToggleVisibility(){
    this.IsVisible = !this.IsVisible;
  }

  Hide(){
    this.IsVisible = false;
  }


  Show(){ 
    this.IsVisible = true;
  }

  constructor() { }
}
