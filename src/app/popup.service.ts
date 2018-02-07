import { Injectable } from '@angular/core';

@Injectable()
export class PopupService {

  constructor() { }
  public isDisplayed:boolean=false;
 
  get() {
    return this.isDisplayed;
  }
  resetVar() {
    return this.isDisplayed=false;  
  }
}
