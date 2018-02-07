import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {HttpClient} from "@angular/common/http";
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { PopupService } from './../popup.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private http: Http,public popup:PopupService) { }
  contactForm: FormGroup;
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.contactForm = new FormGroup({
      full_name: new FormControl ('',[Validators.required, Validators.minLength(2)]),
      email: new FormControl('',[Validators.required, Validators.email,]) ,
      phone: new FormControl(''),
      message_html: new FormControl('',[Validators.required, Validators.minLength(5)]),
      message_about: new FormControl('',[Validators.required, Validators.minLength(5)]),
    })
  }

  get full_name() {return this.contactForm.get('full_name');}
  get email() {return this.contactForm.get('email');}
  get phone () {return this.contactForm.get('phone');}
  get message_html() {return this.contactForm.get('message_html')}
  get message_about() {return this.contactForm.get('message_about')}

  onSubmit() {
    const form = this.contactForm.value;
    const body = {
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      message_html: form.message_html,
      message_about: form.message_about,
    };
}
}
