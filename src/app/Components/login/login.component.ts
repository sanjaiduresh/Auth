import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { IonInput,IonButton,IonItem,IonTitle,IonToolbar,IonRow} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:true,
  imports:[IonInput,ReactiveFormsModule,IonButton,IonItem,IonTitle,IonToolbar,IonRow],
})
export class LoginComponent  implements OnInit {
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern]]
  })
  constructor(private fb:FormBuilder) { }

  get email(){
    return this.loginForm.controls['email'];
  }
  
  get password(){
    return this.loginForm.controls['password'];
  }

  ngOnInit() {}

}
