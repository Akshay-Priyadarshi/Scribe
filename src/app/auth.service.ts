import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthService {

  signup(email:string, password:string, firstName:string, lastName:string)
  {
    return new Promise((resolve,reject)=>
    {
      firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>
      {

       let randomNumber: number = Math.floor(Math.random()*1000);
       response.user.updateProfile(
         {
           "displayName":firstName+" "+lastName,
           "photoURL":"https://api.adorable.io/avatars/"+randomNumber
         }
       ).then(()=>
        {
         resolve();
        }).catch((error)=>
        {
         reject(error);
        })
    }).catch((error)=>
      {
      reject(error);
      })
  })
 }


  login(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email , password);
  }

  constructor() { }

}