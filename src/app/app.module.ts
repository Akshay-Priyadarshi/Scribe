import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { NgxEditorModule} from 'ngx-editor';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';

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
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NgxEditorModule, HttpClientModule ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, MenuComponent, MyblogsComponent, ProfileComponent, HomeComponent, CreateComponent, PostComponent, ViewComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService,AuthGuard]
})
export class AppModule { }
