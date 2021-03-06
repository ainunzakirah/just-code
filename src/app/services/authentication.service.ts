import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Injectable( /*{
  providedIn: 'root' 
}*/)
export class AuthenticationService {

  constructor(
    public angularFireAuth: AngularFireAuth
  ) { }

  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }

   loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }

   logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  userDetails(){
    return firebase.auth().currentUser;
  }

  //service to reset page
  resetPassword(email): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }



}
