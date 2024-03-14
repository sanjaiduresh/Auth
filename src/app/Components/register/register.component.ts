import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators,ValidatorFn,AbstractControl,ValidationErrors} from '@angular/forms';
import { IonInput,IonButton,IonItem,IonTitle,IonToolbar,IonRow} from '@ionic/angular/standalone';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:true,
  imports:[IonInput,ReactiveFormsModule,IonButton,IonItem,IonTitle,IonToolbar,IonRow],
})
export class RegisterComponent  implements OnInit {
  registerForm=this.fb.group({
    fullname:['',Validators.required,Validators.pattern],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]

  },{
    Validators: passwordMatchValidator
  }
  )
  constructor(private fb:FormBuilder) { }
   
  get fullname(){
    return this.registerForm.controls['fullname'];
  }
  
  get email(){
    return this.registerForm.controls['email'];
  }
  
  get password(){
    return this.registerForm.controls['password'];
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  }
  ngOnInit() {}


}
