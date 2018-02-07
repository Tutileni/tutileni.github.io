import { Component,ViewChild,ElementRef,EventEmitter } from '@angular/core';
import { NguiScrollableDirective } from '@ngui/scrollable';
import { AboutComponent } from './about/about.component';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { PopupService } from './popup.service';

import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  name:String='Simao Pedro==Tutileni?"Me":"Fake"'
  listMenuTitles:any;
  selected :any
  color :any
  divClassPerspective:any
  isVis:any
  checkboxItems1=[{ traduction:'hireme.mobapp', name: 'MobileApp', isSelected:false },
    { traduction: 'hireme.webdev', name: 'WebSiteDevelopement', isSelected:false },
    { traduction: 'hireme.servers', name: 'ServersManagement', isSelected:false }
  ]; 
  checkboxItems2=[
    { traduction:'hireme.network', name: 'NetworkDesign', isSelected:false },
  { traduction: 'hireme.project', name: 'ProjectManagement', isSelected:false },
  { traduction: 'hireme.other', name: 'Other', isSelected:false }];
  constructor(public translate: TranslateService,public popup:PopupService) {
    translate.addLangs(["en", "pt","fr"]);

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
    translate.setDefaultLang('en');

    this.listMenuTitles = [
      'Home.title', 
       'about.title',
       'resume.title',
       'contactme.title',
       'hireme.contract'
    ];
    this.divClassPerspective=[] 
    this.isVis=''
    this.color='none'
  }
  hiringForm: FormGroup;
  ngOnInit(){
    this.selectDefault("Home.title",0)
    this.createHiringForm();
  }
  select(item) {this.selected = item}
  isActive(item) {return this.selected === item}
  activeContent(){return this.selected}
  selectDefault(item,index) {if(this.listMenuTitles[0]==item)this.selected = item}
  outerNav(bool) {
    if(bool){
      this.selected="Home.title"
      this.divClassPerspective.push('perspective--modalview')
      this.timeout(25)
      this.divClassPerspective.push('effect-rotate-left--animate');
      this.isVis="isVis"

    }else{
      this.divClassPerspective.pop('effect-rotate-left--animate');
      this.timeout(400)
      this.divClassPerspective.pop('perspective--modalview')
      this.isVis=""
    }
  }
  timeout(time) {
    setTimeout(() => {
      this.timeout(time);
    }, time);
  }
  createListSelect(lang){
    if(lang==="en")
      return "en" === this.translate.currentLang?"English":"pt" === this.translate.currentLang?"Inglês":"Anglais"
    else if(lang==="pt")
      return "pt" === this.translate.currentLang?"Português":"en" === this.translate.currentLang?"Portuguese":"Portugais"
    else
      return "fr" === this.translate.currentLang?"Français":"en" === this.translate.currentLang?"French":"Francês"
  }
  createHiringForm() {
    this.hiringForm = new FormGroup({
      hireme_name: new FormControl ('',[Validators.required, Validators.minLength(2)]),
      email: new FormControl('',[Validators.required, Validators.email,]) ,
      isSelected: new FormControl('',[Validators.requiredTrue]) ,
    })
  }
  get hireme_name() {return this.hiringForm.get('hireme_name');}
  get email() {return this.hiringForm.get('email');}
  get isSelected() {return this.hiringForm.get('isSelected');}
  onSubmitHiring() {
    const form = this.hiringForm.value;
    const body = {
      hireme_name: form.hireme_name,
      email: form.email,
      isSelected:form.isSelected,
  };}
  changeSelectedCheckbox(i:number,e,checkboxList:any[]){
    if (e.target.checked)checkboxList[i].isSelected=true
    else checkboxList[i].isSelected=false 
  }
  public isAtleastOneItemSelected() {
    const selectedItems1 = this.checkboxItems1.filter((item) => item.isSelected);
    const selectedItems2 = this.checkboxItems2.filter((item) => item.isSelected);
    if (selectedItems1.length > 0 || selectedItems2.length>0) {
      return true;
    } else {
      return false;
    }
  }
}
