import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_NewUser(record) { //create user data
    return this.firestore.collection('User').add(record);
  }

  read_User(){ //retrieve user data
    return this.firestore.collection('User').snapshotChanges();
  }

  update_User(recordID, record){ //update user data
    this.firestore.doc('User/' + recordID).update(record);
  }

  delete_User(record_id){ //delete user data
    this.firestore.doc('User/' + record_id).delete();
  }
}
