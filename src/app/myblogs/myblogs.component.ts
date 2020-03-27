import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user:any = {};
  posts:any = [];

  constructor() {
    this.user = firebase.auth().currentUser;
    this.getPosts();
   }

  getPosts(){
    //get the arry of posts from database
    firebase.firestore().collection("posts").get().then((querySnapshot)=>{
      console.log(querySnapshot.docs);
      this.posts = querySnapshot.docs;
    }).catch((error)=>{
      console.log(error);
    })
  }
  ngOnInit() {
  }

  onPostCreated(){
    // refresh the list of posts
    this.posts = [];
    this.getPosts();
  }

  onDelete(){
    // refresh the list of posts
    this.posts = [];
    this.getPosts();
  }
}