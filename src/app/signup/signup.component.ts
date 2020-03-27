import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm : FormGroup;
  userError : any;
  message: string = "";


  constructor(public fb: FormBuilder, public authService:AuthService) {
    this.myForm = this.fb.group({
      firstName : ["",[Validators.required]],
      lastName : ["",[Validators.required]],
      email : ["",[Validators.required,Validators.email]],
      password : ["",[Validators.required,Validators.minLength(8)]],
      confirmPassword : ["",[Validators.required]]
    },{
      validators : this.checkPasswords("password","confirmPassword")
    })  
  }

  checkPasswords(pkey:string, cpkey:string){
    return (group: FormGroup)=>{
      if(group.controls[pkey].value==group.controls[cpkey].value){
        return;
      }
      else{
        (group.controls[cpkey]).setErrors({
          passwordIsNotMatching : true
        })
      }
      
    }
  }

  onSubmit(signupform){
    let email: string = signupform.value.email;
    let password: string = signupform.value.password;
    let firstName: string = signupform.value.firstName;
    let lastName: string = signupform.value.lastName;

    this.authService.signup(email, password, firstName, lastName).then((user: any) => {

      firebase.firestore().collection("users").doc(user.uid).set({
        firstName: signupform.value.firstName,
        lastName: signupform.value.lastName,
        email: signupform.value.email,
        photoURL: user.photoURL,
        interests: "",
        bio: "",
        hobbies: ""
      }).then(() => {
        this.message = "You have been signed up successfully. Please login."
      })
      
    
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })


  }

  ngOnInit() {
  }

}