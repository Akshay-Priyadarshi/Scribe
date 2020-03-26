import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

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

  onSubmit(form)
  {
    let email: string = form.value.email;
     let password: string = form.value.password;
     let firstName: string = form.value.firstName;
     let lastName: string = form.value.lastName;

     this.authService.signup(email,password,firstName,lastName).then((response)=>
     {
       console.log(response);
       this.message = "You have successfully Signed Up";
     }).catch((error)=>
     {
       console.log(error);
       this.userError = error; 
     })
  }

  ngOnInit() {
  }

}