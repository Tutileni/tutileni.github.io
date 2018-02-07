import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','./css/pe-icon-7-stroke/css/pe-icon-7-stroke.css']
})
export class AboutComponent implements OnInit {
  @Input('sec') list: any;
  booL:boolean=false;
  constructor() { }

  ngOnInit() {

  }
}
