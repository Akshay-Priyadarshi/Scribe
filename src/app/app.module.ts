import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { MenuComponent } from './menu/menu.component';

var Config = {
  apiKey: "AIzaSyDcKw3SHNgy7vhJT9_qnNrDu2167JEpQZ8",
  authDomain: "scribe-58b5a.firebaseapp.com",
  databaseURL: "https://scribe-58b5a.firebaseio.com",
  projectId: "scribe-58b5a",
  storageBucket: "scribe-58b5a.appspot.com",
  messagingSenderId: "44114874450",
  appId: "1:44114874450:web:e242e7bb8c143611710f8b",
  measurementId: "G-5JR81S9Q2G"
};
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(Config);
}
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, MenuComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService]
})
export class AppModule { }
