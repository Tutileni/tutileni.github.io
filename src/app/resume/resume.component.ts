import { Component, OnInit,HostListener } from '@angular/core';
import {backend, frontend,networks} from './data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css','./css/pe-icon-7-stroke/css/pe-icon-7-stroke.css']
})
export class ResumeComponent implements OnInit {
  skillsTitles:any[]=['resume.softskills.communication','resume.softskills.workinteam','resume.softskills.speed','resume.softskills.creativity']
  skillsTitlesTechnical:any[][]=[['resume.technicalskills.backend','resume.technicalskills.frontend'],['resume.technicalskills.networkadmin','resume.technicalskills.opensource']]

  view: any[] = [800, 400];
// small screens =>view: any[] = [300, 400];
  // options
  showLegend = true; //false for small screens 
  legendTitle="BackEnd"
  animations=true
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  width:number
  height:number
  @HostListener('window:resize', ['$event'])
  onResize(event) {

    const target = event.target;
    this.width = target.innerWidth;
    this.height = target.innerHeight;
    if(this.width <=600 && this.height<=850){
      this.bool=false
      this.bool?this.showLegend=true:this.showLegend=false
    }else{
      this.bool=true
      this.bool?this.showLegend=true:this.showLegend=false
    }
  }
  bool:boolean=true
  returnSize():any[]{
    return this.bool?this.view:[300, 400]
  }
  getboolLeg(){
    return this.showLegend
  }
  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;

  constructor() {
    Object.assign(this, {backend,frontend,networks}) 
    this.overSkills()
  }
  overSkills(){
    this.progress[0] = this.emulateProgress(75);
    this.progress[1] = this.emulateProgress(80);
    this.progress[2] = this.emulateProgress(60);
    this.progress[3] = this.emulateProgress(70);

    this.progressTechnical[0] = this.emulateProgressTechnical(90);
    this.progressTechnical[1] = this.emulateProgressTechnical(65);
    this.progressTechnical[2] = this.emulateProgressTechnical(70);
    this.progressTechnical[3] = this.emulateProgressTechnical(55);
  }
  onSelect(event) {
    console.log(event);
  }
  stylesGraph = {
    'display': 'none'
  };
  
  val:number=1
  ngOnInit() {
    if(window.screen.width <=600 && window.screen.height<=850){
      this.bool=false
      this.bool?this.showLegend=true:this.showLegend=false
    }else{
      this.bool=true
      this.bool?this.showLegend=true:this.showLegend=false
    }
    this.stylesGraph.display='none';
  }
  showStats(valArg){
    this.stylesGraph.display='block';
    this.val=valArg;
  }
  singleCall():any[]{
    switch(this.val){
      case this.val=1:
        this.legendTitle="BackEnd"
        return backend
      case this.val=2:
        this.legendTitle="Frontend"
        return frontend
      case this.val=3:
        this.legendTitle="Networks"
        return networks
      case this.val=4:
        this.legendTitle="BackEnd"
        return backend
    }
  }
  
  readonly progress=[];
  emulateProgress(limit:number) {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => {
        if (val < limit) {
          val++;
        } 
        // else {
        //   val = 0;
        // }
        observer.next(val);
      }, 100);
      return () => {
        clearInterval(interval);
      };
    });
  }

  readonly progressTechnical=[];
  emulateProgressTechnical(limit:number):Observable<number> {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => {
        if (val < limit) {
          val++;
        } 
        // else {
        //   val = 0;
        // }
        observer.next(val);
      }, 100);
      return () => {
        clearInterval(interval);
      };
    });
  }
}
