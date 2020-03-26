import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  userError: any;
  message: string = "";

  constructor(public fb:FormBuilder, public authService: AuthService, public router: Router){
    this.myForm = fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }
  

  ngOnInit() {}
  

  onSubmit(form){
    this.authService.login(form.value.email,form.value.password).then((data)=>{
      console.log(data);
      this.message = "You have successfully Logged In"
      this.router.navigate(['/myblogs']);
    }).catch((error)=>{
      console.log(error);
      this.userError = error;
    })
  }

}